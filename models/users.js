'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
  name: String,
  lastName1: String,
  lastName2: String,
  phone: Number,
  email: String,
  password: String,
  photo: String,
  type: String,
  created_at: String,
  active: Number
});

module.exports = mongoose.model('users', UserSchema);
