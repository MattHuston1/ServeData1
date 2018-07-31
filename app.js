const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')
const bodyParser = require('body-parser')
const cohortData = require('./cohorts')

app.use(cors())
app.use(bodyParser.json())

// app.get('/',(request,response,next) => {
//   response.send(':tada:')
// })

app.get('/', (request, response, next) => {
  response.json(cohortData)
})

app.listen(port,()=> {
  console.log(`I am listening on ${port}`)
})