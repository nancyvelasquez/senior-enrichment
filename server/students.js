'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Students = models.Students;
module.exports = router;

router.get('/', (req, res, next) => {
  Students.findAll()
  .then(students => {
     res.json(students)
  })
  .catch(next)
});

router.post('/', function (req, res, next) {
  Students.create(req.body)
    .then((newStudent) => {
      res.json({
        message: 'Created successfully'
      });
    })
    .catch(next)
});

router.get('/:id', (req, res, next) => {
  Students.findById(req.params.id)
  .then((foundStudent) => {
    res.json(foundStudent)
  })
  .catch(next)
});

//make sure you do find or create at some point
// need delete