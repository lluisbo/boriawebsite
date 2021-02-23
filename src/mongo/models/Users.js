const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})
schema.pre(
  'save',
  async function (next) {
    // const User = this
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
  }
)
schema.methods.isValidPassword = async function (password) {
  const user = this
  const compare = await bcrypt.compare(password, user.password)
  return compare
}

const User = mongoose.model('user', schema)

module.exports = User
