const models = require('../mongo')

//  GET ALL TOURDATES
module.exports.index = (req, res) => {
  models.tourdates.find().then((result) => {
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(404).json()
    }
  }).catch((err) => {
    res.status(500).json({ error: err })
  })
}
//  GET TOURDATE BY ID
module.exports.getOne = (req, res) => {
  models.tourdates.findById(req.params.tourdatesid).then((result) => {
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(404).JSON()
    }
  }).catch((err) => {
    res.status(500).json({ error: err })
  })
}
//  CREATE A TOURDATE
module.exports.create = (req, res) => {
  const createTourDates = new models.Tourdates(req.body)
  createTourDates.save().then((result) => {
    res.json(result)
  }).catch((err) => {
    res.status(500).json({ error: err })
  })
}
