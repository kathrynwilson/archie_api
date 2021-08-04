import jwt from 'jsonwebtoken'
const log = console.log
  , mongoose = require(`mongoose`)
  , dtVoterFileFields = require(`../static`).demographicFields
  , Org = require(`../models/organization`)
  , config = require(`../config`)
  , R = require(`rambda`)
  , fileConfig = require(`../config/file.config`)
  , mongoDB = fileConfig.dbConnection
  ; // eslint-disable-line semi

mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
mongoose.Promise = global.Promise

module.exports = {
  // not in use
  getOrganization: name => {
    return new Promise((resolve, reject) => {
      Org.findOne({ name }, (err, results) => {
        if (err) return reject(err)
        resolve(results)
      })
    })
  },
  // called by organizationsGet query
  getOrganizations: filters => {
    return new Promise((resolve, reject) => {
      Org.find({ status: { $ne: `archived` }, ...filters }, (err, orgs) => {
        if (err) reject(err)
        resolve(orgs)
      })
    })
  },

  // not in use
  createOrganization: ({ name, email, phone, contactName }, user) => {
    let orgData = {
      name: name,
      email: email,
      phone: phone,
      contactName: contactName,
      ownedProperties: {
        dtVoterFile: dtVoterFileFields,
      },
      // address1: org.address,
      // address2: org.address,
      // city: org.address,
      // state: org.address,
      // zipcode: org.zipcode,
      // status: `active`,
      createdBy: user._id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    return Org.create(orgData)
  },

  // used by organizationDelete mutation
  deleteOrganization: org => {
    return Org.remove(org)
      .then(_ => org._id)
  },

  // used by organizationUpdate mutation
  updateOrganization: async args => {
    const data = R.dissoc(`where`, args)
    const oldOrg = await Org.findOne(args.where)
    const updatedOrg = {
      ...data,
      ownedProperties: getNewOwnedProperties(oldOrg.ownedProperties, data.ownedProperties),
    }
    await oldOrg.updateOne(updatedOrg)
    return { ...oldOrg._doc, ...updatedOrg }
  },
}

function getNewOwnedProperties ( oldProps = {}, newProps = {} ) {
  const flags = R.uniq([
    ...(oldProps.wpaiNationalFlags || []),
    ...(newProps.wpaiNationalFlags || []),
  ])
  const voterFile = R.uniq([
    ...(oldProps.dtVoterFile || dtVoterFileFields),
    ...(newProps.dtVoterFile || []),
  ])
  const mergedProps = {
    wpaiNationalFlags: flags,
    dtVoterFile: voterFile,
  }

  return mergedProps
}
