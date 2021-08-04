const mongoose = require(`mongoose`)
const Schema = mongoose.Schema

const GroupSchema = new Schema({
  name: { type: String, required: true, default: `` },
  description: { type: String, required: false, default: `` },
  organizationId: { type: String, required: true, default: `` },
  organization: {
    type: Schema.ObjectId,
    ref: `organization`,
  },
})
module.exports = mongoose.model(`group`, GroupSchema)
