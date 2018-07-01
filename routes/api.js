const express = require('express')

var router = express.Router()

router.get('/person', (req, res) => {
  res.send({name: 'GET'})    
})


router.post('/person', (req, res) => {
  res.send({name: 'POST'})    
})
  

router.put('/person/:id', (req, res) => {
  res.send({name: 'PUT'})    
})
  
router.delete('/person/:id', (req, res) => {
  res.send({name: 'DELETE'})    
})

module.exports = router

  