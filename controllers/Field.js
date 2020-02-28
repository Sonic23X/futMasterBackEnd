'use strict'

var Field = require('../models/fields');
var fs = require('fs');
var path = require('path');

var controller =
{
  home: function(req, res)
  {
    return res.status(200).send({
      message: 'Funcionó'
    });
  },

};

module.exports = controller;
