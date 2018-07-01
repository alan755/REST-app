const express = require('express')


var app = express()

app.use('/api', require('./routes/api'))

app.listen(process.env.port || 4000, () => {
  console.log('Server is up....!')    
})