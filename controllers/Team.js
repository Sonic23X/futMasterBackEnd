'use strict'

//requires
const moment = require('moment');
const Team = require('../models/teams');

let controller =
{
  getMyTeam: function(req, res)
  {

  },

  createTeam: function(req, res)
  {

    let team = new Team();
    let params = req.body;

    team.name = params.name;
    team.leader = params.leader;
    team.wins = 0;
    team.loses = 0;
    team.created_at = moment().format();
    team.active = 1;

    team.save((err, teamStored) => {
      if(err) return res.status(500).send({message: 'Error: Cannot save the team'});
      if(!teamStored) return res.status(404).send({message: 'Error: Cannot found the team'});

      return res.status(200).send({user: teamStored});
    });
  },

  updateTeam: function(req, res)
  {

  },

  deleteTeam: function(req, res)
  {

  }
};

module.exports = controller;
