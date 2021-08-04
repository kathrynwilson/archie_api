import jwt from 'jsonwebtoken'
const { log } = console // eslint-disable-line no-unused-vars
  , mongoose = require(`mongoose`)
  , User = require(`../models/user`)
  , config = require(`../config`)
  , fileConfig = require(`../config/file.config`)
  , mongoDB = fileConfig.dbConnection

mongoose.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true })
mongoose.Promise = global.Promise

module.exports = {
  // called by userCreate mutation
  createUser: user => {
    let userData = {
      orgId: user.orgId,
      organization: mongoose.Types.ObjectId(user.orgId),
      userName: user.email,
      password: user.password,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      isAdmin: false,
      verified: false,
      status: user.inviteCode ? `invited` : `active`,
      inviteCode: user.inviteCode,
      groups: user.groups,
    }


    return User.create(userData)
  },

  getAll: (req, res, next) => {
    User.find((err, user) => {
      if (err) {
        return res.status(404).end()
      }
      res.send(user)
    })
  },

  getUserFromToken: async (req, token) => {
    return jwt.verify(token, config.jwtSecret)
  },

  // called by login mutation
  getUser: userName => {
    return new Promise((resolve, reject) => {
      User.findOne({ userName }).populate(`organization`).exec((err, results) => {
        if (err) return reject(err)
        resolve(results)
      })
    })
  },
  // called by usersGet query
  getUsers: filters => {
    return new Promise(((resolve, reject) => {
      try {
        User.find({ status: { $ne: `archived` }, ...filters }).populate(`organization`).exec((err, users) => {
          if (err) reject(err)
          resolve(users)
        })
      } catch (e) {
        reject(e)
      }
    }))
  },

  me: user => {
    return User.findOne({ _id: user._id }).populate(`organization`).exec()
  },
  // called by userUpdate mutation
  updateUser: async (where, data) => {
    const oldUser = await User.findOne(where).populate(`organization`).exec()
    if (!oldUser) {
      throw new Error(`user not found`)
    }
    await oldUser.updateOne(data)
    const updatedUser = { ...oldUser._doc, ...data }
    return updatedUser
  },

  // called by setPassword mutation
  setUserPassword: async (where, data) => {
    const user = await User.findOne(where)
    user.password = data.password
    user.save()
    return user._doc
  },

  // not in use
  deleteUser: user => {
    return User.remove({ _id: user._id })
      .then(_ => ({ _id: user._id }))
  },
}
