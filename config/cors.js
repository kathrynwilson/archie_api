// Object -> Bool
module.exports = function checkOrigin (origin) {
  const allowedOrigins = [
    `https://localhost:3000`,
    `http://localhost:3000`,
    `http://localhost:8080`,
    `https://localhost:8080`,
    `https://archie-dev.wpaintel.com:3000`,
    `archie-dev.wpaintel.com:3000`,
    `https://archie-dev.wpaintel.com`,
    `https://archie.wpaintel.com`,
    `https://10.13.37.30:3000`,
    `https://10.13.37.20:3000`,
  ]

  return allowedOrigins.includes(origin)
}
