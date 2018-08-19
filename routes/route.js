const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//retrieving contacts
router.get('/contacts', (req, res, next) => {
  Contact.find({}, (err, contacts) => {
    res.json(contacts);
  })
});

//add contact
router.post('/contact', (req, res, next) => {
  //logic to add contact
  let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_no: req.body.phone_no
  });

  newContact.save((err, contact) => {
    if (err) {
      res.json({
        msg: 'Error occured while adding'
      });
    } else {
      res.json({
        msg: 'Contact added successfully'
      });
    }
  });
});

//delete contact
router.delete('/contact/:id', (req, res, next) => {
  Contact.remove({
    _id: req.params.id
  }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  })
});

module.exports = router;