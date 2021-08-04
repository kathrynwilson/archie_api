require(`dotenv`).config
const log = console.log // eslint-disable-line
  , {
    csvImport,
    userCreate,
    userUpdate,
    userDelete,
    login,
    email,
    setPassword,
    addOrganizationData,
    organizationCreate,
    organizationUpdate,
    groupCreate,
    groupDelete,
    groupUpdate,
    setSettings,
  } = require(`./mutations`)
  , { getUsers, getOrganizations, getGroups, me } = require(`./queries`)
  , { GraphQLDate, GraphQLTime, GraphQLDateTime } = require(`graphql-iso-date`) // eslint-disable-line no-unused-vars
  , GraphQLJSON = require(`graphql-type-json`)
  , fileService = require(`../services/file.service`)
  , orgService = require(`../services/organization.service`)
  , dataService = require(`../services/data.service`)
  ; // eslint-disable-line semi

module.exports = {
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  Json: GraphQLJSON,
  Query: {
    me: me,
    i360Login: (root, args, context, info) => {
      return context.dataSources.i360API.login()
    },
    i360GetVolunteerDetails: (root, args, context, info) => {
      // TODO: add logic to decide wether to call
      return context.dataSources.i360API.volunteers().details.list()
    },
    usersGet: getUsers,
    groupsGet: getGroups,
    organizationsGet: getOrganizations,
    uploadsGet: (root, args, context, info) => fileService.getAll(context.user),
    fileGet: (root, args, context, info) => {
      return fileService.getFile(args)
    },
    vaultFieldsGet: (root, args, context, info) => fileService.getFields(context.user),
    vaultGet: (root, args, context, info) => {
      const saneArgs = {
        query: args.query || {},
        info: args.info || [],
        importedInfo: args.importedInfo || [],
      }
      return dataService.getVaultData(saneArgs, context.user)
    },

    exploreGet: (root, args, context, info) => dataService.getDTVoterFiles(args, info),
  },
  Mutation: {
    login,
    csvImport,
    userCreate,
    userUpdate,
    userDelete,
    email,
    setPassword,
    i360VolunteerCreate: (root, args, context, info) => {
      return context.dataSources.i360API.volunteers().create(args.data)
    },
    addOrganizationData,
    organizationCreate,
    organizationUpdate,
    organizationDelete: (root, args, context, info) => {
      return orgService.deleteOrganization(args)
    },
    groupCreate,
    groupDelete,
    groupUpdate,
    setSettings,
    fileDelete: (root, args, context, info) => {
      return fileService.deleteFile(args, context.user)
    },
    vaultFieldsAdd: (root, args, context, info) => {
      return orgService.updateOrganization({
        where: { _id: context.user.orgId },
        ownedProperties: {
          wpaiNationalFlags: args.wpaiNationalFlags,
          dtVoterFile: args.dtVoterFile,
        },
      })
    },
    // not to be confused with csvUpload. this only puts demographic data into vault
    vaultInsert: (root, args, context, info) => {
      return dataService.insertDemographicData(args, context.user)
    },

    exportToVault: (root, args, context, info) => {
       return dataService.exportToVault(args, context.user)
    }, 
  },
}
