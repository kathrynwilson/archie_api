// config/mail.js

const nodemailer = require(`nodemailer`)
const mail = {}

mail.sendMail = function (to, from, subject, text, cb) {
  let transporter = nodemailer.createTransport({
      host: `smtp.office365.com`,
      port: 587,
      secure: false,
      auth: {
          user: `admin@wpaintel.com`,
          pass: `0Wpa1Wrs2`,
      },
      tls: {
          ciphers: `SSLv3`,
      },
  })
  transporter.sendMail({ from: from, to: to, subject: subject, html: text }, (error, info) => {
    if (error) {
      console.log(error) // eslint-disable-line no-console
    } else {
      console.log(`Email Sent To  ${to}`) // eslint-disable-line no-console
    }
    cb(error, info)
  })
}

module.exports = mail
