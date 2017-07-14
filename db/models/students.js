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
});

module.exports = Students;