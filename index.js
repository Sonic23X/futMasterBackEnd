'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/futmaster',  {useNewUrlParser: true, useFindAndModify: false,  useUnifiedTopology: true })
        .then(() => {
          //Creación de servidor
          app.listen(port, () =>
          {
            console.log("Servidor corriendo en localhost:" + port);
          });
        })
        .catch(err => console.log(err));
