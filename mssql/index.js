"use strict"
const Sequelize = require(`sequelize-mssql`)
const sequelize = new Sequelize(
  `mssql://sa:0Wpa1Wrs2@10.13.37.30:1433/Archie_Prod`,
  {
    logging: console.log, // false
  },
)

const fs = require(`fs`)
const path = require(`path`)

const basename = path.basename(__filename)
// const env = process.env.NODE_ENV || `development`
// models/index.js4

const db = {}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(`.`) !== 0 && file !== basename && file.slice(-3) === `.js`
    )
  })
  .forEach(file => {
    const model = sequelize[`import`](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

Object.keys(db).forEach(key => {
  if (`associate` in db[key]) {
    db[key].associate(db)
  }
})

db.dtVoterFile.hasOne(db.wpaiNationalFlags, {
  foreignKey: `rnc_regid`,
  sourceKey: `DT_RegID`,
  as: `NationalFlags`,
})

db.wpaiNationalFlags.hasOne(db.dtVoterFile, {
  foreignKey: `DT_RegID`,
  sourceKey: `rnc_regid`,
  as: `VoterFile`,
})

db.dtVoterFile.hasOne(db.wpaiTopIssueSegments, {
  foreignKey: `rnc_regid`,
  sourceKey: `DT_RegID`,
  as: `TopIssueSegments`,
})

db.dtVoterFile.hasOne(db.wpaiChamber, {
  foreignKey: `rnc_regid`,
  sourceKey: `DT_RegID`,
  as: `ChamberData`,
})

db.wpaiChamber.hasOne(db.dtVoterFile, {
  foreignKey: `DT_RegID`,
  sourceKey: `rnc_regid`,
  as: `VoterFile`,
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
