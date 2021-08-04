const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const OrgSchema = new Schema({
  name: { type: String, required: true, default: `` },
  address1: { type: String, required: false, default: `` },
  address2: { type: String, required: false, default: `` },
  city: { type: String, required: false, default: `` },
  state: { type: String, required: false, default: `` },
  zipcode: { type: String, required: false, default: `` },
  email: { type: String, required: false, default: `` },
  phone: { type: String, required: false, default: `` },
  contactName: { type: String, required: false, default: `` },
  status: { type: String, required: false, default: `active` },
  ownedProperties: { type: JSON, required: false, default: {} },
  createdAt: { type: Date, required: false },
  createdBy: { type: Schema.Types.ObjectId, required: false },
  updatedAt: { type: String, required: false },
})
module.exports = mongoose.model(`organization`, OrgSchema, `organizations`)
