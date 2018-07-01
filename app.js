const express = require('express')
const bodyparser = require('body-parser')

var app = express()

app.use(bodyparser.json())
app.use('/api', require('./routes/api'))

app.listen(process.env.port || 4000, () => {
  console.log('Server is up....!')    
})