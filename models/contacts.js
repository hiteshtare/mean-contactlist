const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  first_name: {
    type: String,
    require: true
  },
  last_name: {
    type: String,
    require: true
  },
  phone_no: {
    type: String,
    require: true
  }
})

const contacts = module.exports = mongoose.model('Contacts', contactSchema);