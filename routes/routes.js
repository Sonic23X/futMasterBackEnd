'use strict'

//requires
const express = require('express');
const multipart = require('connect-multiparty');

//Middlewares
const Middleware = require('../configs/middlewares');

//Controllers
let AuthController = require('../controllers/Auth.js');
let TeamController = require('../controllers/Team.js');

//variable que almacena las rutas
let router = express.Router();

//rutas
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

//teams
router.use(['/team/new'], Middleware.validation);
router.post('/team/new', TeamController.createTeam);


module.exports = router;
