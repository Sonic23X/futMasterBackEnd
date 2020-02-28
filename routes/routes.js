'use strict'

var express = require('express');
var FieldController = require('../controllers/Field.js');

var router = express.Router();

//midleware
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/home', FieldController.home);

module.exports = router;
