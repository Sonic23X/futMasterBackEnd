'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TeamSchema = Schema({
  name: String,
  leader: String,
  wins: Number,
  loses: Number,
  photo: String,
  created_at: Date,
  active: Number
});

module.exports = mongoose.model('teams', TeamSchema);
