'use strict'

//requires
const express = require('express');
const multipart = require('connect-multiparty');

//Controllers
let AuthController = require('../controllers/Auth.js');

//variable que almacena las rutas
let router = express.Router();

//rutas
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);




module.exports = router;
