'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Campus = models.Campus;
module.exports = router;

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
});

router.get('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
  .then((foundCampus) => {
    console.log(foundCampus)
    res.json(foundCampus)
  })
  .catch(next)
});

router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then((newCampus) => {
      res.json({
        message: 'Created successfully'
      });
    })
    .catch(next)
});

//make sure you do find or create at some point
// need delete