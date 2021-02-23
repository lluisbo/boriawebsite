const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const TourDates = mongoose.model('tourdate', schema)
module.exports = TourDates
