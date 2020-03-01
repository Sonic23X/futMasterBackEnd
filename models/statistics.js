'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let StatisticsSchema = Schema({
  userId: String,
  rol: String,
  wins: Number,
  loses: Number,
  goals: Number,
  assistances: Number,
  created_at: Date,
  active: Number
});

module.exports = mongoose.model('statistics', StatisticsSchema);
