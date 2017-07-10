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

router.post('/', function (req, res, next) {
//   console.log(req.body)
//   Campus.create(req.body)
//     .then((newCampus) => {
//       res.json({
//         message: 'Created successfully'
//       });
//     })
//     .catch(next);
// });

 Campus.findOrCreate({
   where: {
     name: req.body.name,
     imageURL: req.body.imageURL
   }
  })
  .spread((campus, created) => {
    console.log("Find or create", campus, created)
    // return Campus.create(req.body)
  })
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
    return Campus.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((campus) => {
        if(campus) {
            res.sendStatus(204).redirect('/')
        } else res.sendStatus(404)
    })
    .catch(next)
})

//make sure you do find or create at some point
// need delete