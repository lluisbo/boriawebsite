const passwordHash = require('password-hash')
const { adminEmail, adminPassword } = require('../config')

const initFirstUser = (User) => {
  User.countDocuments().then((count) => {
    if (count === 0) {
      console.log('User not found')
      const admin = new User({
        email: adminEmail,
        password: passwordHash.generate(adminPassword)
      })
      admin.save()
    }
  })
}
module.exports = {
  initFirstUser
}
