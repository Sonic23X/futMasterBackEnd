'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
  name: String,
  ubication: String,
  store: Boolean,
});

module.exports = mongoose.model('fields', ProjectSchema);
