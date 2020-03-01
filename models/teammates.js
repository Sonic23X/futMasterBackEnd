'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TeamMateSchema = Schema({
  teamId: String,
  playerId: String,
  created_at: Date,
  active: Number
});

module.exports = mongoose.model('teammates', TeamMateSchema);
