'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StatisticsSchema = Schema({
  playerId: String,
  wins: Number,
  loses: Number,
  goals: Number,
  assistance: Number,
  created_at: Date,
  active: Number
});

module.exports = mongoose.model('statistics', StatisticsSchema);
