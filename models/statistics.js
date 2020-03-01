'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StatisticsSchema = Schema({
  playerId: String,
  wins: Number,
  loses: Number,
  goals: Number,
  assistance: Number,
  deleted: Number
});

module.exports = mongoose.model('statistics', StatisticsSchema);
