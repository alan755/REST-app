const mongoose = require('mongoose')

const schema = mongoose.Schema

const personschema = new schema({
  name: {
    type: String,
    required: [true, 'Name is required!']    
  },   
  rank: {
    type: String
  }, 
  avalability: {
    type: Boolean,
    default: false
  }
})

const Person = mongoose.model('person', personschema)

module.exports = Person