const { RESTDataSource } = require(`apollo-datasource-rest`)
const btoa = require(`btoa`)
const rp = require(`request-promise`)
const { log } = console // eslint-disable-line no-unused-vars

module.exports = class I360API extends RESTDataSource {
  constructor() {
    super()
  }

  login () {
    return i360Login()
  }

  volunteers () {
    return {
      accountRecovery: {
        post: placeHolderFunction,
        multiple: placeHolderFunction,
        get: placeHolderFunction,
      },

      activity: {
        summary: placeHolderFunction,
        get: placeHolderFunction,
        search: placeHolderFunction,
      },

      credentials: {
        get: placeHolderFunction,
        update: placeHolderFunction,
      },

      history: {
        get: placeHolderFunction,
        create: placeHolderFunction,
        byType: placeHolderFunction,
        search: placeHolderFunction,
        postSearch: placeHolderFunction,
        delete: placeHolderFunction,
      },

      notes: {
        list: placeHolderFunction,
        create: placeHolderFunction,
        get: placeHolderFunction,
        update: placeHolderFunction,
        delete: placeHolderFunction,
      },

      list: placeHolderFunction,

      create: createUser,

      get: {
        byId: placeHolderFunction,
        search: placeHolderFunction,
        postSearch: placeHolderFunction,
        byFreeText: placeHolderFunction,
        singleByCriteria: placeHolderFunction,
        postSingleByCriteria: placeHolderFunction,
      },

      // TODO: simply this to one call
      stats: {
        summary: placeHolderFunction,
        summaryByUserName: placeHolderFunction,
        summaryV2: placeHolderFunction,
      },

      coordinators: {
        get: placeHolderFunction,
        post: placeHolderFunction,
      },

      permissions: {
        list: placeHolderFunction,
        create: placeHolderFunction,
        delete: placeHolderFunction,
      },

      tagGroups: {
        list: placeHolderFunction,
      },

      tags: {
        search: placeHolderFunction,
        list: placeHolderFunction,
        byName: placeHolderFunction,
        delete: placeHolderFunction,
        add: placeHolderFunction,
        addMultiple: placeHolderFunction,
      },

      details: {
        byId: placeHolderFunction,
        byFreeText: placeHolderFunction,
        byCriteria: placeHolderFunction,
      },

      profiles: {
        summaryOfActions: placeHolderFunction,
        summaryOfActions2: placeHolderFunction,
        summaryOfActions3: placeHolderFunction,
        listActions: placeHolderFunction,
        listActions2: placeHolderFunction,
        orgActions: placeHolderFunction,
        orgActions2: placeHolderFunction,
        activistSummary: placeHolderFunction,
        activistSummary2: placeHolderFunction,
        activistSummary3: placeHolderFunction,
        activistActions: placeHolderFunction,
        activistActions2: placeHolderFunction,
        orgRank: placeHolderFunction,
        orgRank2: placeHolderFunction,
        volunteerOrgRank: placeHolderFunction,
        volunteerOrgRank2: placeHolderFunction,
        activistOrgRank: placeHolderFunction,
        activistOrgRank2: placeHolderFunction,
        populateRankByActionsResult: placeHolderFunction,
      },

      policy: {
        get: placeHolderFunction,
      },

      walkbook: {
        list: placeHolderFunction,
        assign: placeHolderFunction,
        put: placeHolderFunction,
        delete: placeHolderFunction,
        syncSingle: placeHolderFunction,
        syncMultiple: placeHolderFunction,
      },
    }
  } // end volunteers

  surveys () {
    return {
      callerIds: {
        get: placeHolderFunction,
        create: placeHolderFunction,
      },

      get: {
        byId: placeHolderFunction,
        search: placeHolderFunction,
        published: placeHolderFunction,
      },

      update: placeHolderFunction,

      delete: placeHolderFunction,

      create: placeHolderFunction,

      scriptTemplates: {
        get: placeHolderFunction,
        list: placeHolderFunction,
        create: placeHolderFunction,
      },

      voiceMailMessages: {
        list: placeHolderFunction,
        create: placeHolderFunction,
        get: placeHolderFunction,
      },

      volunteers: {
        list: placeHolderFunction,
        assign: placeHolderFunction,
        delete: placeHolderFunction,
        assignMultiple: placeHolderFunction,
      },

      walkbooks: {
        list: placeHolderFunction,
        get: placeHolderFunction,
      },
    }
  }
} // end I360API

// function volunteerDetails (orgId, volunteerId, token) {
//  return placeHolderFunction()
//  // return rp({
//  //    url: `https://api.i-360.com/org/${orgId}/${volunteerId}/details`,
//  //    method: `GET`,
//  //    headers: {
//  //      Authorization: `Bearer ${token}`,
//  //    },
//  //  })
// }

function i360Login () {
  return rp({
    url: `https://login.i-360.com/core/connect/token`,
    method: `POST`,
    headers: {
      "authorization": `Basic ${btoa(`roclient:secret`)}`,
      "Content-Type": `application/x-www-form-urlencoded`,
      "Accept": `application/json`,
    },
    form: {
      grant_type: `password`, // eslint-disable-line camelcase
      username: `DJackson`,
      password: `0Wpa1Wrs2`,
      scope: `openid profile sampleApi`,
    },
  })
    .then(r => JSON.parse(r))
    .catch(e => e)
}

function createUser (email, token) {
  return rp({
    url: `https://api-platform.i-360.com/2.0/Org/1782/Volunteers`,
    method: `POST`,
    body: JSON.stringify({ email }),
    headers: {
      "authorization": `Bearer ${token}`,
      "Content-Type": `application/json`,
      "Accept": `application/json`,
    },
  })
    .then(r => JSON.parse(r))
    .catch(e => e)
}

function placeHolderFunction () {
  return Promise.resolve({})
}
