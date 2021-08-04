import jwt from 'jsonwebtoken'
const log = console.log
  , mongoose = require(`mongoose`)
  , Group = require(`../models/group`)
  , fileConfig = require(`../config/file.config`)
  , mongoDB = fileConfig.dbConnection
  ; // eslint-disable-line semi

mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
mongoose.Promise = global.Promise

module.exports = {
  // not in use
  getGroup: name => {
    return new Promise((resolve, reject) => {
      Group.findOne({ name }, (err, results) => {
        if (err) return reject(err)
        resolve(results)
      })
    })
  },
  // called by groupsGet query
  getGroups: (filters, user) => {
    return new Promise((resolve, reject) => {
      Group.find({ organizationId: filters.organizationId || user.orgId }, (err, grps) => {
        if (err) reject(err)
        resolve(grps)
      })
    })
  },

  // used by groupCreate mutation 
  createGroup: async ({ name, organizationId, description }, user) => {
    const orgId = organizationId || user.orgId
    let grpData = {
      name: name,
      organizationId: orgId,
      description,
      organization: mongoose.Types.ObjectId(orgId),
    }

    return Group.create(grpData)
  },

  // used by groupDelete mutation 
  deleteGroup: _id => {
    return Group.remove({ _id })
      .then(_ => _id)
  },

  // used by groupUpdate mutation 
  updateGroup: async ({ where, data }) => {
    const oldGrp = await Group.findOne(where)
    const updateResponse = await oldGrp.updateOne(data)
    if (updateResponse.nModified === 1) {
      return { ...oldGrp._doc, ...data }
    } else {
      throw new Error(`Not Modified`)
    }
  },
}
