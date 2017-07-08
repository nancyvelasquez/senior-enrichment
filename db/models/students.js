'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('students', {
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
});