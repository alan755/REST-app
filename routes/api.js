const express = require('express')
const Person = require('../models/person')

var router = express.Router()

router.get('/person', (req, res) => {
  res.send({name: 'GET'})    
})


router.post('/person', (req, res) => {
Person.create(req.body).then((person) => {
  res.send(person)
})                                          //var person = new Person(req.body) 
                                           //person.save()
  res.send({name: req.body.name})    
})
  

router.put('/person/:id', (req, res) => {
  res.send({name: 'PUT'})    
})
  
router.delete('/person/:id', (req, res) => {
  res.send({name: 'DELETE'})    
})

module.exports = router

  