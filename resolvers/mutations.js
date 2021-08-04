const log = console.log // eslint-disable-line
  //  , request = require(`request-promise`)
  , config = require(`../config`)
  , bcrypt = require(`bcrypt`)
  , jsonwebtoken = require(`jsonwebtoken`)
  , { createUser, updateUser, setUserPassword } = require(`../services/user.service`)
  , { insertData } = require(`../services/data.service`)
  , { createGroup, deleteGroup, updateGroup } = require(`../services/group.service`)
  , { uploadFile } = require(`../services/file.service`)
  , { createOrganization, updateOrganization } = require(`../services/organization.service`)
  , mail = require(`../config/mail`)
  ; // eslint-disable-line semi

module.exports = {
  csvImport,
  login,
  userCreate,
  userDelete,
  email,
  userUpdate,
  setPassword,
  addOrganizationData,
  organizationCreate,
  organizationUpdate,
  groupCreate,
  groupDelete,
  groupUpdate,
  setSettings,
}

function addOrganizationData (root, args, context, info) {
  return insertData(args)
}

function csvImport (root, args, context, info) {
  return uploadFile(context.user, args)
}

async function login (_, { username, password }) {
  const user = await require(`../services/user.service`).getUser(username)
  if (!user) throw new Error(`No user with name ${username}`)

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error(`Incorrect password`)

  let token = jsonwebtoken.sign(
    {
      _id: user._id,
      userName: user.userName,
      orgId: user.orgId,
      organization: user.organization,
    },
    config.jwtSecret,
    { expiresIn: `1d` },
  )

  return { token, user }
}

function userCreate (root, args, context, info) {
  const newUser = {
    ...args.data,
    orgId: args.orgId || context.user.orgId,
  }

  return createUser(newUser)
}

function userDelete (root, args, context, info) {
  if (!args.where._id && !args.where.userName) return Promise.reject(`unique identifier required`)
  return updateUser(args.where, { status: `archived` })
  // return deleteUser(args.where)
}

function userUpdate (root, args, context, info) {
  return updateUser(args.where, args.data)
}

function setPassword (root, args, context, info) {
  return setUserPassword(args.where, args.data)
}

function email (root, args, context, info) {
  return new Promise((resolve, reject) => {
    mail.sendMail(args.email, `admin@wpaintel.com`, args.subject, args.message, (err, body) => {
      if (err) reject(err)
      resolve(body)
    })
  })
}

function organizationCreate (root, args, context, info) {
  return createOrganization(args, context.user)
}
function organizationUpdate (root, args, context, info) {
  return updateOrganization(args, context.user)
}

function groupCreate (root, args, context, info) {
  return createGroup(args, context.user)
}

function groupDelete (root, args, context, info) {
  return deleteGroup(args.id)
}

function groupUpdate (root, args, context, info) {
  return updateGroup(args)
}

function setSettings (root, args, context, info) {
  return updateUser({ _id: context.user._id }, { settings: args.data })
}