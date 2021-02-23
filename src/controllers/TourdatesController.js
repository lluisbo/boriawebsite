const express = require('express')
const models = require('../mongo')

const tourDatesRouter = () => {
  const router = express.Router()
  // GET ALL TOURDATES
  router.get('/', (req, res) => {
    models.tourdates.find().then((result) => {
      if (result) {
        res.status(200).json(result)
      } else {
        res.status(404).json()
      }
    }).catch((err) => {
      res.status(500).json({ error: err })
    })
  })
  //  GET TOURDATE BY ID
  router.get('/:tourdatesid', (req, res) => {
    models.tourdates.findById(req.params.tourdatesid).then((result) => {
      if (result) {
        console.log('hello')
        res.status(200).json(result)
      } else {
        res.status(404).JSON()
      }
    }).catch((err) => {
      res.status(500).json({ error: err })
    })
  })
  //  CREATE A TOURDATE
  router.post('/:id', (req, res) => {
    const createTourDates = new models.Tourdates(req.body)
    createTourDates.save().then((result) => {
      res.json(result)
    }).catch((err) => {
      res.status(500).json({ error: err })
    })
  })

  return router
}

module.exports = {
  tourDatesRouter
}
