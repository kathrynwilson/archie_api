const { log } = console // eslint-disable-line no-unused-vars
  , userService = require(`../services/user.service`)
  , orgService = require(`../services/organization.service`)
  , groupService = require(`../services/group.service`)
  ; // eslint-disable-line semi

module.exports = {
  getUsers,
  getOrganizations,
  getGroups,
  me,
}

function me (root, args, context, info) {
  return userService.me(context.user)
}

function getUsers (root, args, context, info) {
  return userService.getUsers(args.where)
}

function getOrganizations (root, args, context, info) {
  return orgService.getOrganizations(args.where)
}

function getGroups (root, args, context, info) {
  return groupService.getGroups(args, context.user)
}
