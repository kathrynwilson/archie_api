const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

let FileSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  fileName: { type: String, required: true, unique: true, max: 100 },
  filePath: { type: String, required: false, max: 100 },
  orgId: { type: Schema.ObjectId, required: true, max: 100 },
  status: { type: String, required: false, max: 100 },
  rowCount: { type: Number, required: true },
  matchedRowCount: { type: Number, required: false },
  createdBy: { type: Schema.ObjectId, required: true, max: 100 },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  encodedName: { type: String, required: false, max: 100, default: null },
  fileHash: { type: String, required: true, max: 100, default: null }, 
  base64Code: { type: String, required: true, max: 100, default: null },
  properties: { type: Array, required: true, default: [] },
})

module.exports = mongoose.model(`file`, FileSchema, `files`)
