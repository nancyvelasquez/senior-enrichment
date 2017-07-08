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
}, {
      instanceMethods: {
        toJSON: function () {
          //Return a shallow clone so toJSON method of the nested models can be called recursively.
          return Object.assign({}, this.get());
        }
      }
});