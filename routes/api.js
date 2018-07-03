const express = require('express')
const Person = require('../models/person')

var router = express.Router()

router.get('/person', (req, res, next) => {
  res.send({name: 'GET'})    
})


router.post('/person', (req, res,next) => {
  Person.create(req.body).then((person) => {
    res.send(person)
  }).catch(next) 
})                                       
//var person = new Person(req.body) 
//person.save()

router.put('/person/:id', (req, res, next) => {
  //res.send({name: 'PUT'})
  Person.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    Person.findOne({_id:req.params.id}).then((person) => {
      res.send(person)
    })
  })    
})
  
router.delete('/person/:id', (req, res, next) => {
  //res.send({name: 'DELETE'})
  Person.findByIdAndRemove({_id: req.params.id}).then((person) => {
    res.send(person)
  })
})

module.exports = router

