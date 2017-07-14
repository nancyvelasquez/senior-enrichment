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

router.param('studentId', function (req, res, next, id) {
  Students.findById(id)
  .then(student => {
    if (!student) {
      const err = Error('Student not found');
      err.status = 404;
      throw err
    }
    req.student = student;
    next();
    return null; 
  })
  .catch(next);
});

router.post('/', (req, res, next) => {
  Students.findOrCreate({
    where: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      campusId: req.body.campusId 
    }
  })
  .then(([newStudent]) => {
      res.status(201).json(newStudent)
    // })
  })
  .catch(next);
})

router.get('/:id', (req, res, next) => {
  Students.findById(req.params.id)
  .then((foundStudent) => {
    res.json(foundStudent)
  })
  .catch(next)
});

router.get('/:studentId/campus', (req, res, next) => {
  req.student.getCampus()
  .then(campus => {
    res.json(campus)
  })
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  Students.findById(req.params.id)
    .then(student => {
      return student.update(req.body)
    })
    .then(updatedStudent => res.json(updatedStudent))
    .catch(next);
})


router.delete('/:id', (req, res, next) => {
    return Students.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {    
      res.send(req.params.id);
    })
    .catch(next)
})
