const express = require('express')
const cors = require('cors')
require('./src/mongo/dbconnection')

//const buildDataRouter = require('./src/controllers/data/buildRouter').buildRouter
const tourDatesRouter = require('./src/controllers/TourdatesController').tourDatesRouter

const app = express()
const Port = 3001

app.use(express.json())
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}))
//app.use('/data', buildDataRouter())
app.use('/tourdates', tourDatesRouter())

app.listen(Port, () => {
  console.log(`App running on port ${Port}`)
})
