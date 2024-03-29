'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FieldSchema = Schema({
  name: String,
  ubication: String,
  store: Boolean,
  width: Number,
  height: Number,
  created_at: Date,
  active: Number
});

module.exports = mongoose.model('fields', FieldSchema);
