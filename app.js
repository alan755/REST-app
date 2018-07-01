const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

var app = express()


mongoose.connect('mongodb://localhost/persongo')
mongoose.Promsie = global.Promise

app.use(bodyparser.json())
app.use('/api', require('./routes/api'))

app.listen(process.env.port || 4000, () => {
  console.log('Server is up....!')    
})