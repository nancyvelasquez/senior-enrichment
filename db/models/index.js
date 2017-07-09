'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any 
	// other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you 
	// will have to change every time it is required everywhere

var Sequelize = require('sequelize');
// var db = new Sequelize('postgres://localhost:5432/school_de_nancy', {
//   logging: false
// });

const Students = require('./students')
const Campus = require('./campus')

Students.belongsTo(Campus);
Campus.hasMany(Students);

module.exports = { Students, Campus };



