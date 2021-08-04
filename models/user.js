const mongoose = require(`mongoose`)
  , Schema = mongoose.Schema
  , bcrypt = require(`bcrypt`)
  ; // eslint-disable-line

const UserSchema = new Schema({
  orgId: {
    type: Schema.ObjectId,
    required: true,
  },
  organization: {
    type: Schema.ObjectId,
    ref: `organization`,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: false,
  },
  settings: {
    type: JSON,
    required: false,
  },
  groups: {
    type: Array,
    required: false,
  },
  verified: { type: Boolean, required: false, default: false },
  isAdmin: { type: Boolean, required: false, default: false },
  status: { type: String, required: false, max: 100 }, // Active | disabled | archived | invited
  inviteCode: { type: String, required: false },
})

UserSchema.pre(`save`, function (next) {
  const salt = bcrypt.genSaltSync()
  const password = bcrypt.hashSync(this.password, salt)
  const phone = this.phone.split(``).filter(x => `1234567890`.includes(x)).join(``)
  this.set({ password, phone })
  next()
})

// UserSchema.pre(`updateOne`, function (next) {
//  next()
// })
// TODO: add updatedAt and update in update middleware

module.exports = mongoose.model(`user`, UserSchema, `users`)
