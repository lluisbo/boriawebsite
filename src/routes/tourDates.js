const express = require('express')
const tourDatesController = require('../controllers/TourdatesController')
const router = express.Router()

router.get('/', tourDatesController.index)
router.get('/:tourdatesid', tourDatesController.getOne)
router.post('/:id', tourDatesController.create)

module.exports = router
