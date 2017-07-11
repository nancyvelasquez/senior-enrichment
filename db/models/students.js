'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')
var Campus = require('./campus');

const Students = db.define('student', {
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
}, {
      // classMethods: {
      //   associate: function(models) {
      //     student.belongsTo(models.Campus);
      //   },
      // },
  
      // defaultScope: {
      //   include: [Campus]
      // },

      // // getterMethods: {
      // //   campusName: function() {
      // //     return this.getCampus().then((campus) => {
      // //       console.log(campus)
      // //       return campus.campusName;
      // //     })
      // //   }
      
      // instanceMethods: {
      //   getCampus: function() {
      //     return db.models('campus').findOne({ 
      //       where: { id: this.campusId}
      //     })
      //   }
      // }
});

module.exports = Students;