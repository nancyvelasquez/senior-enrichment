'use strict'
// const db = require('./db')
// const {Campus, Student} = require('./db/models');
var Promise = require('bluebird');
const db = require('./db/index');
const Campus = db.model('campus');
const Student = db.model('student');

const campuses = [
    {name: "Department of Drones", imageURL: "https://upload.wikimedia.org/wikipedia/en/4/44/MuseDronesCover.jpg"},
    {name: "Department of Black Holes and Revelations", imageURL: "https://upload.wikimedia.org/wikipedia/en/c/c5/BlackHolesCover.jpg"},
    {name: "Department of Origin of Symmetry", imageURL: "https://upload.wikimedia.org/wikipedia/en/3/3a/Museoriginofsymemtryalbumcover.jpg"},
    {name: "Absolution", imageURL: "https://upload.wikimedia.org/wikipedia/en/b/b4/Muse_-_Absolution_Cover_UK.jpg"},
    {name: "Revelations", imageURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/Theresistance.jpg"},
    {name: "Department of the 2nd Law", imageURL: "https://en.wikipedia.org/wiki/The_2nd_Law#/media/File:Muse_2nd_law.jpg"}
  ];

const students = [
    {firstName: "Nancy", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 1},
    {firstName: "Jose", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 2},
    {firstName: "Ulice", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 3},
    {firstName: "Javier", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 4},
    {firstName: "Delia", lastName: "Arias", email: "fakenancy@gmail.com", campusId: 5},
    {firstName: "John", lastName: "Kendrick", email: "fakenancy@gmail.com", campusId: 6},
];


db.sync({force: true})
  .then(() => {
    return Promise.map(campuses, campus => {
      return Campus.create(campus)
    })
    .then(() => {
        return Promise.map(students, student => {
            return Student.create(student)
        })
    })
  })
  .then(function () {
        console.log("Finished inserting data");
  })
  .catch(function (err) {
      console.error('There was totally a problem', err, err.stack);
  })
  .finally(function () {
      db.close()
      console.log('connection closed');
      return null;
  });