// apis
// api.js
let express = require(`express`)
const config = require(`../config`)
const { log } = console
const userService = require(`../services/user.service`)

const jwt = require(`jsonwebtoken`)
const router = express.Router()

router.use(async (req, res, next) => {
  const origin = req.headers.origin || req.headers.host || `*`
  const allowedOrigin = require(`../config/cors`)(origin)
  if (!allowedOrigin) return res.json({ error: `cors failed. ${origin} is not allowed` })
  res.setHeader(`Access-Control-Allow-Origin`, req.headers.origin)
  res.setHeader(`Access-Control-Allow-Headers`, [`content-type`, `access-token`])
  res.setHeader(`Access-Control-Allow-Methods`, [`POST`])
  if (req.method === `OPTIONS`) return res.end(``)

  let token = req.headers[`access-token`]
  if (!token) return res.status(401).send({ message: `No token provided.` })

  try {
    req.user = await userService.getUserFromToken(null, token) // eslint-disable-line require-atomic-updates
    next()
  } catch (e) {
    console.error(e) // eslint-disable-line no-console
    return res.status(401).json({ message: `invalid token` })
  }
})

router.get(`/`, (req, res) => {
  res.send(`Home Route`)
})

module.exports = router
