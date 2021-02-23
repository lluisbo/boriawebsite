const express = require('express')
const cors = require('cors')
const passport = require('passport')
const bodyParser = require('body-parser')

require('./src/authMiddleware/auth')
const authRoute = require('./src/routes/auth')
const tourDatesRoutes = require('./src/routes/tourDates')
const profileRoute = require('./src/routes/profile')

const app = express()
const Port = 3001
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}))

app.use('/', authRoute)
app.use('/user', passport.authenticate('jwt', { session: false }), profileRoute)
app.use('/tourdates', tourDatesRoutes)

// HANDLE ERRORS
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({ error: err })
})

app.listen(Port, () => {
  console.log(`App running on port ${Port}`)
})
