// 'use strict'
// // const db = require('./db')
// // const {Campus, Student} = require('./db/models');
// var Promise = require('bluebird');

// var db = require('./db/index');
// var Campus = require('./db/index');
// var Student = require('./db/index');

// var data = {
//   campus: [
//     {name: "Department of Drones", imageURL: "https://upload.wikimedia.org/wikipedia/en/4/44/MuseDronesCover.jpg"},
//     {name: "Department of Black Holes and Revelations", imageURL: "https://upload.wikimedia.org/wikipedia/en/c/c5/BlackHolesCover.jpg"},
//     {name: "Department of Origin of Symmetry", imageURL: "https://upload.wikimedia.org/wikipedia/en/3/3a/Museoriginofsymemtryalbumcover.jpg"},
//     {name: "Absolution", imageURL: "https://upload.wikimedia.org/wikipedia/en/b/b4/Muse_-_Absolution_Cover_UK.jpg"},
//     {name: "Revelations", imageURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/Theresistance.jpg"},
//     {name: "Department of the 2nd Law", imageURL: "https://en.wikipedia.org/wiki/The_2nd_Law#/media/File:Muse_2nd_law.jpg"},
//   ],
//   students: [
//     {firstName: "Nancy", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 1},
//     {firstName: "Jose", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 1},
//     {firstName: "Ulice", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 2},
//     {firstName: "Javier", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 3},
//     {firstName: "Delia", lastName: "Arias", email: "fakenancy@gmail.com", campusId: 3},
//     {firstName: "John", lastName: "Kendrick", email: "fakenancy@gmail.com", campusId: 4},
//     {firstName: "Gloribel", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 5},
//     {firstName: "Ksenia", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 5},
//     {firstName: "Tego", lastName: "Velasquez", email: "fakenancy@gmail.com", campusId: 5},
//    ]
// };

// // db.sync({force: true})
// // .then(function () {
// //     console.log("Dropped old data, now inserting data");
// //         Promise.map(Object.keys(data), function(key){
// //             return Promise.map(data[key], function (item) {
// //                 return db.model(item).create(item)
// //         });
// //     });
// // });
// // //   const students = Promise.map(data.students, function(student){
// // //      return Student.create(student);
// // //   });
// // //   return Promise.all([campus, students]);
// // // })
// // .then(function () {
// //   console.log('Finished inserting data');
// // })
// // .catch(function (err) {
// //   console.error('There was totally a problem', err, err.stack);
// // })
// // .finally(function () {
// //   db.close(); // creates but does not return a promise
// //   return null; // stops bluebird from complaining about un-returned promise
// // });

// function createStudents () {
//     return Promise.map(data.students, function (student) {
//         return student.save();
//     });
// }

// function createCampuses () {
//     return Promise.map(data.campus, function (campus) {
//         return campus.save();
//     });
// }

// function seed() {
//     return createCampuses()
//     .then(function (createdStudents) {
//         return createdStudents;
//     });
// }

// // db.sync({force: true})
// // .then(function () {
// //   console.log("Dropped old data, now inserting data");
// //   return Promise.map(Object.keys(data), function (key) {
// //     return Promise.map(data[key], function (item) {
// //       return db.model(item)
// //       .create(item)
// //     });
// //   });
// // })
// // .then(function () {
// //   console.log("Finished inserting data");
// // })
// // .catch(function (err) {
// //   console.error('There was totally a problem', err, err.stack);
// // })
// // .finally(function () {
// //   db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
// //   console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
// //   return null; // silences bluebird warning about using non-returned promises inside of handlers.
// // });
