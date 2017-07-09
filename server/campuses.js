'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Campus = models.Campus;
module.exports = router;

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next);
});

router.param('campusId', function (req, res, next, id) {
  Campus.findById(id)
  .then(campus => {
    if (!campus) {
      const err = Error('Campus not found');
      err.status = 404;
      throw err
    }
    req.campus = campus;
    next();
    return null; // silences bluebird warning about promises inside of next
  })
  .catch(next);
});

router.get('/:id', (req, res, next) => {
  // console.log('This is he id campus', req.campus)
  // res.json(req.campus);
  Campus.findById(req.params.id)
    .then((foundCampus) => {
      res.json(foundCampus)
    })
  .catch(next);
});

router.get('/:campusId/students', (req, res, next) => {
  req.campus.getStudents()
  .then(students => {
    res.json(students)
  })
  .catch(next);
});

router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then((newCampus) => {
      res.json({
        message: 'Created successfully'
      });
    })
    .catch(next);
});

//make sure you do find or create at some point
// need delete