require('./dbconnection')

const TourDates = require('./models/TourDates')
const User = require('./models/Users')

module.exports = {
  tourdates: TourDates,
  user: User
}
