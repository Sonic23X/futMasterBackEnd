'use strict'

//requites
const jwt = require('jsonwebtoken');

const configJWT = require('./jwt');

// middlewares de la aplicación
let middlewares =
{
  validation: function (req, res, next)
  {
    if(!req.headers.authorization)
      return res.status(403).send('Access denied');

    let token = req.headers.authorization.split(" ")[2];

    jwt.verify(token, configJWT.key, (err, decoded) =>
    {
      if(err)
        return res.status(401).send('Token is not valid');
      else
      {
        req.decoded = decoded;
        next();
      }
    });
  }
};


module.exports = middlewares;
