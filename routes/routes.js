'use strict'

//requires
const express = require('express');
const multipart = require('connect-multiparty');

//Middlewares
const Middleware = require('../configs/middlewares');

//Controllers
const AuthController = require('../controllers/Auth.js');
const TeamController = require('../controllers/Team.js');
const UserController = require('../controllers/User.js');

//variable que almacena las rutas
let router = express.Router();

//rutas
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

//Middleware and routes of team
router.use(['/team/:id', '/team/new'], Middleware.validation);
router.get('/team/:id', TeamController.getMyTeam);
router.post('/team/new', TeamController.createTeam);
router.put('/team/:id', TeamController.updateTeam);
router.delete('/team/:id', TeamController.deleteTeam);

//Middleware and routes of user
router.use(['/home'], Middleware.validation);
router.get('/home', UserController.home);

module.exports = router;
