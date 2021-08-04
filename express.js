require(`dotenv`).config()
const { log } = console // eslint-disable-line no-unused-vars
  , express = require(`express`)
  , https = require(`https`)
  , fs = require(`fs`)
  , cookieParser = require(`cookie-parser`)
  , bodyParser = require(`body-parser`)
  , mssql = require(`./mssql`)
  , config = require(`./config`)
  , I360API = require(`./datasources/i360API`)

  , {
    mergeSchemas,
    makeExecutableSchema,
    ApolloServer,
    AuthenticationError,
    ForbiddenError,
  } = require(`apollo-server-express`) // eslint-disable-line no-unused-vars
  , { GraphQLSchema, buildSchema } = require(`graphql`) // eslint-disable-line no-unused-vars

  , compression = require(`compression`)

  , typeDefs = require(`./schema`)
  , resolvers = require(`./resolvers`)

  , options = {}

  , schema1 = makeExecutableSchema({
    typeDefs,
    resolvers,
  })
  , {
    generateModelTypes, // eslint-disable-line no-unused-vars
    generateSchema,
  } = require(`sequelize-graphql-schema`)(options) // eslint-disable-line no-unused-vars
  // based on models
  , mssqlSchema = new GraphQLSchema(generateSchema(mssql))

  , mergedSchema = mergeSchemas({ schemas: [schema1, mssqlSchema] })

  , app = express()

  , port = 3000

  , userService = require(`./services/user.service`)

  , HEADER_NAME = `access-token`
  , api = require(`./routes/api.js`)

  , fileService = require(`./services/file.service`)

  , server = new ApolloServer({
    schema: mergedSchema,
    dataSources: () => {
      return {
        i360API: new I360API(),
      }
    },
    context: async ({ req, res }) => {
      // cors
      const origin = req.headers.origin || req.headers.host || `*`
      const allowedOrigin = require(`./config/cors`)(origin)
      if (!allowedOrigin) throw new ForbiddenError(`cors failed. ${origin} is not allowed`)

      const publicOperations = [`login`, `verifyUser`, `setPassword`]
      if (publicOperations.includes(req.body.operationName)) return {} // continue operation without user

      try {
        const authToken = req.headers[HEADER_NAME]
        const tokenUser = await userService.getUserFromToken(req, authToken)
        const user = await userService.getUser(tokenUser.userName)
        return { user }
      } catch (e) {
        throw new AuthenticationError(`unauthenticated`)
      }
    },
  })

  ;// eslint-disable-line semi


app.use(require(`express-status-monitor`)())
app.set(`Secret`, config.jwtSecret)
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: `100mb` }))
app.use(cookieParser())

app.get(`*`, (req, res, next) => {
  next()
})

app.use(`/api`, api)
app.use(express.static(`public`))

// uploads - dj 12/15
// app.get(`/api/v1/uploads`, fileService.getAll)
// app.post(`/api/v1/upload`, async (req, res) => {
//   const result = await fileService.uploadFile(req.user, req.body)
//   res.json(result)
// })
// app.delete(`/api/v1/upload/:id`, fileService.deleteFile)

server.applyMiddleware({
  app,
  path: `/graphql`,
})
// https.createServer({ key: fs.readFileSync(`./ssl/wpaintel.key`), cert: fs.readFileSync(`./ssl/bundle.crt`) }, app)
//  .listen(3000, () => {
//    console.log(`Archimedes Server on https://localhost:3000`) // eslint-disable-line no-console
//  })
// http server:
app.listen(port, () => {
  console.log(`Archimedes Server on http://localhost:${port}`) // eslint-disable-line no-console
})
