'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//configuración de rutas
var app_routers = require('./routes/routes');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE');
    next();
});

//rutas
app.use('/api', app_routers);

// exportar
module.exports = app;
