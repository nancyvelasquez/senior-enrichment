'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')

const Campus = db.define('campus', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  instanceMethods: {
    getStudents: function () {
      return db.model('student').findAll({
          where: { campusId: this.id }
      });
    },
    toJSON: function () {
      return Object.assign({}, this.get());
    }
  }
});

module.exports = Campus;