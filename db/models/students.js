'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
       isEmail: true
    }
  }
}, 
      // classMethods: {
      //   associate: function(models) {
      //     student.belongsTo(models.Campus, { associations: true });
      //   },
      // },
      // getterMethods: {
      //   campusName: function() {
      //     return this.getCampus().then((campus) => {
      //       console.log(campus)
      //       return campus.campusName;
      //     })
      //   }
      
      // instanceMethods: {
      //   getCampus: function() {
      //   return db.models('students').findOne({ 
      //     include: [{ 
      //       model: db.models('campus') }] }) // Notice `include` takes an ARRAY
      //       .then(campus => console.log(campus))
      //       .catch(console.error)
      //   }
      // }
);