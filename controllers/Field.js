'use strict'

let Field = require('../models/fields');

let controller =
{
  home: function(req, res)
  {
    return res.status(200).send({
      message: 'Funcionó'
    });
  },

};

module.exports = controller;
