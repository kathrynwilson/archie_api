const log = console.log // eslint-disable-line
  , mongoose = require(`mongoose`)
  , File = require(`../models/file`)
  , dataService = require(`./data.service`)
  , base64 = require(`base-64`)
  , utf8 = require(`utf8`)
  , md5 = require(`md5`)
  , csvtojson = require(`csvtojson`)
  // , fileBase64 = require(`file-base64`)
  , R = require(`rambda`)
  // , { spawn } = require(`child_process`)
  , { demographicFields } = require(`../static`)
  // , async = require(`async`)
  // , fs = require(`fs`)
  // , path = require(`path`)
  // , btoa = require(`btoa`)
  , fileConfig = require(`../config/file.config`)
  , mongoDB = fileConfig.dbConnection
  ; // eslint-disable-line semi
mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
mongoose.Promise = global.Promise

module.exports = {
  getAll: user => {
    return File.find({
      status: { $ne: `archived` },
      orgId: user.orgId,
    }, { base64Code: false })
  },

  getFields: user => {
    return new Promise((resolve, reject) => {
      File.find({
        status: { $ne: `archived` },
        orgId: user.orgId,
      }, { properties: true }, (err, orgFiles) => {
        if (err) reject(err)
        resolve(orgFiles.reduce((allprops, x) => {
          return allprops.concat(x.properties).concat(demographicFields)
        }, []))
      })
    })
  },

  getFile: ({ id, fileName }) => {
    let where = {}
    if (id) {
      where = { _id: id }
    } else if (fileName) {
      where = { fileName }
    } else {
      return new Error(`unique identifier required`)
    }

    return File.findOne(where)
  },

  /*
  * used in uploadFile mutation
  */
  uploadFile: async (user, { name, data }) => {
    const base64Code = utf8.decode(data)
      , jsonData = await getJsonData(base64Code)
      ;// eslint-disable-line semi

    if (notValidData(jsonData.headers)) throw new Error(`no primary key. Must have either rnc_regid or StateVoterId`)
    const fileName = getFileName(name)
    const records = getRecords(jsonData.data)
    // let recordsAfterMatch = []
    try {
      const rowCount = jsonData.data.length
      const metaData = {
        name: name,
        fileName: `${fileName}.csv`,
        orgId: user.orgId,
        rowCount,
        properties: jsonData.headers.map(str => str.toLowerCase()),
        status: `active`, // active | archived
        fileHash: md5(base64Code),
        createdBy: user._id,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      // Done is separate service now (data_matcher)
      // const { ownedProperties } = user.organization
      // recordsAfterMatch =
      //   await dataService.matchRecords(
      //     records,
      //     metaData,
      //     ownedProperties,
      //   )
      // const matchedRowCount = recordsAfterMatch.filter(x => x.matched).length
      const recordsToSave = records.map(x => ({ importedData: { ...normalizeKeys(x), meta: metaData } }))
      const saveDataRes = await dataService.insertData(recordsToSave, user.orgId)
      // dataService.insertData(recordsToSave, `${user.orgId}_temp`)

      // saveToFS(name, base64Code),
      if (
        saveDataRes.result &&
        saveDataRes.result.ok &&
        ((saveDataRes.result.nInserted + saveDataRes.result.nModified)
          || (saveDataRes.result.nUpserted + saveDataRes.result.nModified)
        ) === rowCount
      ) {
        const res = await saveInfoToMongo(metaData, 0 /* matchedRowCount*/, base64Code)
        return R.dissoc(`base64Code`, res)
      } {
        return new Error(`error while saving data. ${rowCount} records inserted`)
      }
    } catch (e) {
      log(e)
      return new Error(e)
    }
  },

  // used be fileDelete mutation
  deleteFile: async (args, user) => {
    try {
      const file = await File.findOne({ _id: args.id })
      await dataService.deleteData(file, user)
      return File.updateOne({ _id: args.id }, { $set: { status: `archived` } })
    } catch (e) {
      log(e)
      return new Error(`error while deleting file and associated data`)
    }
  },

  _getFileName: getFileName,
}
// function saveToFS (name, base64Str, fileName) {
//   return new Promise((resolve, reject) => {
//     fileBase64.decode(
//       base64Str,
//       fileName,
//       (err, output) => {
//         if (err) return reject(err)
//         try {
//           spawn(`mv`, [`${fileName}.csv`, `../uploads`])
//         } catch (e) {
//           console.log(e) // eslint-disable-line no-console
//         }
//         return resolve(`success`)
//       },
//     )
//   })
// }
function getFileName (name) {
  return `${name.split(` `).concat(new Date().getTime()).join(`_`).toLowerCase()}`
}
async function getJsonData (base64Str) {
  const csvString = base64.decode(base64Str)
  const data = await csvtojson().fromString(csvString)
  const headers = R.pipe(R.map(R.keys), R.head)(data)
  return { data, headers }
}
function saveInfoToMongo (file, matchedRowCount, base64Code) {
  const fileModel = new File({ ...file, matchedRowCount, base64Code })
  return fileModel.save()
}

function getRecords (data) {
  let records = []
  if (typeof data === `string`) {
    try {
      records = JSON.parse(data)
    } catch (e) {
      return new Error(`problem parsing data`)
    }
  } else records = data

  return records
}

// function getCurrentFiles (user) {
//   return File.find({ orgId: user.orgId, status: `active` }) // TODO: make constants for status
// }
//
// function checkDuplicate (currentFiles, name) {
//   const duplicate = currentFiles.find(x => x.name === name)
//   if (duplicate) {
//     return duplicate.updateOne({ status: `archived` })
//   } else {
//     return null
//   }
// }
function notValidData (headers) {
  const normalizedHeaders = headers.map(x => x.toLowerCase())
  return !normalizedHeaders.includes(`rnc_regid`)
    && !normalizedHeaders.includes(`statevoterid`)
}
// Object -> Object
function normalizeKeys (record) {
  return Object.keys(record).reduce((newObj, key) => {
    return { ...newObj, [key.toLowerCase()]: record[key] }
  }, {})
}
