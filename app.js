const express = require('express')
const cors = require('cors')
require('./src/mongo/dbconnection')

const tourDatesRoutes = require('./src/routes/tourDates')

const app = express()
const Port = 3001

app.use(express.json())
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}))

app.use('/tourdates', tourDatesRoutes)

app.listen(Port, () => {
  console.log(`App running on port ${Port}`)
})
