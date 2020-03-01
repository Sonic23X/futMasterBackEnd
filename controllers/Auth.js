'use strict'

//requires
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const moment = require('moment');

const User = require('../models/users');
const configJWT = require('../configs/jwt');

//controlador
let controller =
{
  login: function(req, res)
  {
    User.findOne({email: req.body.email.toLowerCase()}, function(err, user)
    {
      if(err) return res.status(500).send({message: 'Error: Cannot login in the app'});
      if(user === null) return res.status(401).send({message: 'Email doesn\'t exists'});

      bcrypt.compare(req.body.password, user.password, function(err, result)
      {
        if(err) return res.status(500).send({message: 'Error: Cannot login in the app'});

        if(result)
        {
          //generar JWT
          let token = jwt.sign({ id: user._id }, configJWT.key);

          return res
              .status(200)
              .send({user: user, token: token});
        } else
        {
          return res
              .status(401)
              .send('Password doesn\'t match');
        }
      });
    });
  },

  register: function(req, res)
  {
    let user = new User();
    var params = req.body;

    //hash de password
    bcrypt.hash(params.password, 5, function(err, password)
    {
      if(err) return res.status(500).send({message: 'Error: Cannot save the user'});

      user.name = params.name;
      user.lastName1 = params.lastName1;
      user.lastName2 = params.lastName2;
      user.phone = params.phone;
      user.email = params.email;
      user.password = password;
      user.photo = null;
      user.type = 'Player';
      user.created_at = moment().locale('es').format();
      user.active = 1;

      user.save((err, userStored) => {
        if(err) return res.status(500).send({message: 'Error: Cannot save the user'});
        if(!userStored) return res.status(404).send({message: 'Error: Cannot found the user'});

        return res.status(200).send({user: userStored});
      });
    });
  },
};

module.exports = controller;
