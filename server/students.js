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

router.post('/', function (req, res, next) {
  Students.create(req.body)
    .then((newStudent) => {
      res.status(201).json({
        message: 'Created successfully'
      });
    })
    .catch(next)
});

// router.post('/', (req, res, next) => {
//   Student.findOrCreate({
//     where: {
//       id: req.body.id
//     }
//   })
//   .then(([newStudent]) => {
//     return newProtein.createTaco({
//       name: req.body.name,
//       price: +req.body.price,
//       tortilla: req.body.tortilla
//     })
//     .then(taco => {
//       res.status(201).json(taco)
//     })
//   })
//   .catch(next);
// })

router.get('/:id', (req, res, next) => {
  Students.findById(req.params.id)
  .then((foundStudent) => {
    res.json(foundStudent)
  })
  .catch(next)
});

//make sure you do find or create at some point
// need delete

router.get('/:studentId/campus', (req, res, next) => {
  req.student.getCampus()
  .then(campus => {
    res.json(campus)
  })
  .catch(next);
});

// router.put('/:id', function (req, res, next) {
//   Students.update(req.body, {
//     where: {id: req.params.id},
//     returning: true
//   })
//   .then(function (results) {
//     console.log(results)
//     res.json({
//       message: 'Updated successfully',
//     });
//   })
//   .catch(next);
// });

// I know this is not kosher

// router.put('/:id', (req, res, next) => {
//   Students.findById(req.params.id)
//     .then(student => {
//         const firstName = (req.body.firstName.length ? req.body.firstName : student.firstName);
//         const lastName = (req.body.lastName.length ? req.body.lastName : student.lastName);
//         const email = (req.body.email.length ? req.body.email : student.email);
//         const campusId = req.body.campusId;
//       return student.update({ firstName, lastName, email, campusId })
//     })
//     .then(updatedStudent => res.json(updatedStudent))
//     .catch(next);
// })

router.put('/:id', (req, res, next) => {
  Students.findById(req.params.id)
    .then(student => {
        const firstName = (req.body.firstName.length ? req.body.firstName : student.firstName);
        const lastName = (req.body.lastName.length ? req.body.lastName : student.lastName);
        const email = (req.body.email.length ? req.body.email : student.email);
        const campusId = req.body.campusId;
        
      return student.update({ firstName, lastName, email, campusId })
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
      res.sendStatus(204);
    })
    .catch(next)
})
