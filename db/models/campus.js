'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('campus', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.VIRTUAL,
    get: function () {
      return `/api/campus/${this.id}/image`;
    }
  }
});