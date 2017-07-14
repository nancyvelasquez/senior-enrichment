'use strict'
// const db = require('./db')
// const {Campus, Student} = require('./db/models');
var Promise = require('bluebird');
const db = require('./db/index');
const Campus = db.model('campus');
const Student = db.model('student');

const campuses = [
    {name: "Chandler Hall", imageURL: "http://www.wm.edu/offices/residencelife/oncampus/residencehalls/upperlevel/chandler/chandlerphoto/chandler.jpg"},
    {name: "James Blair Hall", imageURL: "https://www.wm.edu/about/visiting/campusmap/location/photos/141.jpg"},
    {name: "School of Education", imageURL: "http://education.wm.edu/images/photosets/newfacility/photoset1.jpg"},
    {name: "Morton Hall", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6rKA968XcH_7ceXG5HL7X4Fq8wXoKTyxCBXilCdH6VQKMoN3fQ"},
    {name: "Wren Chapel", imageURL: "http://www.insightintodiversity.com/wp-content/uploads/2016/04/Rear_view_of_the_Wren_Building_College_of_William__Mary_in_Williamsburg_Virginia_USA_2008-04-23-825x275.jpg"},
  ];

const students = [
    {firstName: "Nancy", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 1}
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