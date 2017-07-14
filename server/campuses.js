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
    // console.log('This is the new campus in post ', newCampus)
    // return newCampus.enterNewCampus({
    //   name: req.body.name,
    //   imageURL: req.body.imageURL,
    // })
    // .then(newCampus => {
      res.status(201).json(newCampus)
    // })
  })
  .catch(next);
})


// router.put('/:id', function (req, res, next) {
//   console.log('req.body ', req.body)
//   Campus.update(req.body, {
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


router.put('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
    .then(campus => {
        const name = (req.body.name.length ? req.body.name : campus.name);
        const imageURL = (req.body.imageURL.length ? req.body.imageURL : campus.imageURL);
      return campus.update({ name, imageURL })
    })
    .then(updatedCampus => res.json(updatedCampus))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
   console.log('This is the router delete ', req.params.id)
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