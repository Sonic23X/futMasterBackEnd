'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TeamSchema = Schema({
  name: String,
  leader: String,
  wins: Number,
  loses: Number,
  created_at: String,
  deleted: Number
});

module.exports = mongoose.model('teams', TeamSchema);
