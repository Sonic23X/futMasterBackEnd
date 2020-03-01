'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GameSchema = Schema({
  team1: String,
  team2: String,
  date: Date,
  status: Number,
  created_at: Date,
  active: Number
});

module.exports = mongoose.model('fields', FieldSchema);
