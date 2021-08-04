const { log } = console // eslint-disable-line no-unused-vars
  , { demographicFields } = require(`../static`)
  , MongoClient = require(`mongodb`).MongoClient
  , fileConfig = require(`../config/file.config`)
  , R = require(`rambda`)
  , dbConnection = fileConfig.dbConnection
  , mssqlDB = require(`../mssql`)
  , md5 = require(`md5`)
  , redis = require(`redis`)
  , { Op } = require(`sequelize-mssql`)
  , redisClient = redis.createClient({
    host: `10.13.37.30`,
    port: `6379`,
  })
  ; // eslint-disable-line semi

module.exports = {

  async insertData (records, orgId) {
    const client = new MongoClient(dbConnection, { useUnifiedTopology: true })
    try {
      await client.connect()
      const db = client.db()
      const collectionName = `org_${orgId}`
      const collection = await db.collection(collectionName)

      const hasDocuments = await collection.findOne()

      const bulk = collection.initializeUnorderedBulkOp()
      if (hasDocuments) {
        records.forEach(d => {
          bulk.find(getMongoWhere(d)).upsert().updateOne({ $set: { importedData: d.importedData } }) // eslint-disable-line camelcase
        })
        // const operations = bulk.getOperations()
        // log(operations)
      } else {
        records.forEach(d => {
          bulk.insert(d)
        })
      }

      const result = bulk.execute()
      // client.close()
      return result
    } catch (e) {
      // client.close()
      return new Error(e.toString())
    }
  },

  async deleteData (file, user) {
    const { fileName } = file
    const client = new MongoClient(dbConnection, { useUnifiedTopology: true })
    await client.connect()
    const db = client.db()
    const collectionName = `org_${user.orgId}`
    const collection = await db.collection(collectionName)

    // await collection.remove({ [name]: { $exists: true } })
    await collection.remove({ "importedData.meta.fileName": fileName })

  },

  async insertDemographicData (args, user) {
    const demographicData = await queryMssql(args, demographicFields) 
    return this.insertData(demographicData, user.orgId)
  },

  async getVaultData (args, user) {
    const client = new MongoClient(dbConnection, { useUnifiedTopology: true })
    await client.connect()
    const db = client.db()
    const collectionName = `org_${user.orgId}`
    const collection = await db.collection(collectionName)

    const importedProjection = args.importedInfo.reduce((a, x) => 
        ({ ...a, [`importedData.${x}`]: true }), {})
    const projection = args.info.reduce((a, x) => 
        ({ ...a, [x]: true }), importedProjection)
    const where = createWhereFromQueryBuilderQuery(args.query)

    return await collection.find(where, projection).toArray()
  },

  async exportToVault({ regIds }, user) {
    const where = { DT_RegID: regIds }
    const data = await queryMssql(where, demographicFields)  

    return this.insertData(data, user.organization.id)
  },

  getDTVoterFiles ({ where }, info) {

    let md5var = {
      where: where,
      info: info.fieldNodes[0].selectionSet,
    }

    const md5Sum = md5(JSON.stringify(md5var))
    return new Promise(((resolve, reject) => {
      redisClient.get(md5Sum, (err, result) => {
        if (err) return reject(err)

        if (result) {
          log(`returning cached result: `, md5Sum)
          return resolve(JSON.parse(result))
        }

        mssqlDB.dtVoterFile.findAll({
          where: formattedWhere(where),
          attributes: mapAttributes(mssqlDB.dtVoterFile, info),
        }).then(getRes => {
          const jsonResults = JSON.stringify(getRes)
          redisClient.set(md5Sum, jsonResults, (err, setRes) => {
            if (err) return reject(err)
            resolve(getRes)
          })
        }).catch(reject)
      })
    }))
  },
}
function createWhereFromQueryBuilderQuery (query) {
  if (query.type) {
    if (query.type === `query-builder-rule`) {
      return makeStringComparison(query.query)
    }
    if (query.type === `query-builder-group`) {
      return createWhereFromQueryBuilderQuery(query.query)
    }
  }
  if (query.logicalOperator.id === `or`) {
    return { $or: query.children.map(createWhereFromQueryBuilderQuery) }
  }
  if (query.logicalOperator.id === `and`) {
    return { $and: query.children.map(createWhereFromQueryBuilderQuery) }
  }

  return {}
}

function makeStringComparison ({ operator, operand, rule, value }) {
  const val = new RegExp([`^`, value, `$`].join(``), `i`)
  const notVal = new RegExp([`^(?!`, value, `$).*$`].join(``), `i`)
  const containsVal = new RegExp([`.*`, value, `.*`].join(``), `i`)
  const notContainsVal = new RegExp([`^(?!.*`, value, `.*$).*$`].join(``), `i`)
  const beginVal = new RegExp([`^`, value, `.*`].join(``), `i`)
  const endVal = new RegExp([`.*`, value, `$`].join(``), `i`)
  switch (operator) {
  case `equals`:
    return { [getKey(rule, operand)]: val }
  case `does not equal`:
    return { [getKey(rule, operand)]: notVal }
  case `contains`:
    return { [getKey(rule, operand)]: containsVal }
  case `does not contain`:
    return { [getKey(rule, operand)]: { $not: { $regex: `.*${value}.*` } } }
  case `is empty`:
    return { [getKey(rule, operand)]: null }
  case `is not empty`:
    return { [getKey(rule, operand)]: { $ne: null } }
  case `begins with`:
    return { [getKey(rule, operand)]: beginVal }
  case `ends with`:
    return { [getKey(rule, operand)]: endVal }
  default:
    return {}
  }
}

function getKey(fieldName, field) {
  const re = /-imported$/
  if (re.test(fieldName)) {
    return `importedData.${field}`
  }
  return field
}

function getMongoWhere (x) {
  if (!x.importedData) {
    return topLevelWhere(x)
  }
  return mongoWhere(x)
}
function topLevelWhere (x) {
    return {
      "importedData.rnc_regid": x.DT_RegID, // eslint-disable-line camelcase
    }
}
function mongoWhere (x) {
  if (x.importedData.rnc_regid) {
    return {
      "importedData.rnc_regid": x.importedData.rnc_regid, // eslint-disable-line camelcase
    }
  }

  const where = { "importedData.statevoterid": x.importedData.statevoterid }
  return x.importedData.primarystate
    ? { ...where, "importedData.primarystate": x.importedData.primarystate }
    : { ...where, "importedData.state": x.importedData.state }
}
// Object -> Object
function formattedWhere (obj) {
  const where = !!obj.Zipcode
    ? R.pipe(R.assoc(`MailingAddressZip5`, obj.Zipcode), R.dissoc(`Zipcode`))(obj)
    : obj
    
    return Object.keys(where).reduce((a, k) => {
        if (typeof where[k] === "object" && !!where[k].like) {
          return { ...a, [k]: { [Op.like]: where[k].like } } 
        }
        return { ...a, [k]: where[k] }
    }, {})
}
// Object -> [String] -> [Object]
async function queryMssql (where, attributes) {
  const data = await mssqlDB.dtVoterFile.findAll({ where, attributes })
  return data.map(x => x.get({ plain: true }))
}
/* Copy-pasta'd from https://medium.com/free-code-camp/a-5-line-major-efficiency-hack-for-your-graphql-api-type-resolvers-b58438b62864
  as noted in the article and comments: does not work with custom field resolvers, renamed fields, spread fragments, or inline fragments
*/
function mapAttributes (model, { fieldNodes }) {
  // get the fields of the Model (columns of the table)
  const columns = new Set(Object.keys(model.rawAttributes))
  const requestedAttributes = fieldNodes[0].selectionSet.selections
    .map(({ name: { value } }) => value)
  // filter the attributes against the columns
  return requestedAttributes.filter(attribute => columns.has(attribute))
}
