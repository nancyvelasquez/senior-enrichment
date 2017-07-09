'use strict';

var Sequelize = require('sequelize')
var db = require('../index.js')

const Campus = db.define('campus', {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  instanceMethods: {
    getStudents: function () {
      return db.model('student').findAll({
        // include: [{
        //   model: db.model('campus'),
          where: { campusId: this.id } // makes this entire query an inner join
        // }]
      });
    },
    toJSON: function () {
      //Return a shallow clone so toJSON method of the nested models can be called recursively.
      return Object.assign({}, this.get());
    }
  }
});

module.exports = Campus;