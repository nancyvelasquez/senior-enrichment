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
      return null;
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
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

// router.post('/', function (req, res, next) {
//   Campus.create(req.body)
//     .then((newCampus) => {
//       res.status(201).json({
//         message: 'Created successfully'
//       });
//     })
//     .catch(next);
// });

router.post('/', (req, res, next) => {
  Campus.findOrCreate({
      where: {
        name: req.body.name,
        imageURL: req.body.imageUrl
      }
    })
    .then(([newCampus]) => {
      res.status(201).json(newCampus)
      // })
    })
    .catch(next);
})


router.put('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(campus => {
      return campus.update(req.body)
    })
    .then(updatedCampus => res.json(updatedCampus))
    .catch(next);
})

// router.put('/:id', (req, res, next) => {
//   Campus.findById(req.params.id)
//     .then(campus => {
//       console.log('This is the campus before update ?', campus)
//       const name = (req.body.name.length ? req.body.name : campus.name);
//       const imageURL = (req.body.imageURL.length ? req.body.imageURL : campus.imageURL);
//       return campus.update({
//         name,
//         imageURL
//       })
//     })
//     .then(([updatedCampus]) => {
//       console.log('This is the updated campus ', updatedCampus)
//       res.json(updatedCampus)
//     })
//     .catch(next);
// })

router.delete('/:id', (req, res, next) => {
  return Campus.destroy({
      where: {
        id: req.params.id,
      }
    })
    .then(() => {
      res.send(req.params.id)
    })
    .catch(next)
})

// router.delete('/:id', (req, res, next) => {
//   Campus.findById(req.params.id)
//     .then(campus => {
//       return campus.destroy({})
//     })
//     .then(deletedCampus => res.json(deletedCampus))
//     .catch(next);
// })




//make sure you do find or create at some point