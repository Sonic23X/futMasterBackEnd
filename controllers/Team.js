'use strict'

//requires
const moment = require('moment');
const Team = require('../models/teams');
const TeamMate = require('../models/teammates');

let controller =
{
  getMyTeam: function(req, res)
  {
    var teamId = req.params.id;

    if(teamId == null) return res.status(404).send({message: 'Team not found'});

    Team.findById(teamId, (err, team) =>
    {
      if(err) return res.status(500).send({message: 'Cannot search the team'});
      if(!team) return res.status(404).send({message: 'The team doesn\'t exists'});

      TeamMate.find({teamId: teamId}).exec((err, teammates) =>
      {
        if(err) return res.status(500).send({message: 'Cannot search the teammates'});
        if(!teammates) return res.status(404).send({message: 'Cannot get the teammates'});

        return res.status(200).send({team: team, teammates: teammates});
      });
    });
  },

  createTeam: function(req, res)
  {
    let team = new Team();
    let params = req.body;

    team.name = params.name;
    team.leader = params.leader;
    team.wins = 0;
    team.loses = 0;
    team.photo = null;
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
    let teamId = req.params.id;
    let update = req.body;

    Team.findByIdAndUpdate(teamId, update, {new: true}, (err, teamUpdated) =>
    {
      if(err) return res.status(500).send({message: 'Cannot update the team'});
      if(!teamUpdated) return res.status(404).send({message: 'The team doesn\'t exists'});

      return res.status(200).send({
        team: teamUpdated
      });
    });
  },

  deleteTeam: function(req, res)
  {
    let teamId = req.params.id;
    let update = req.body;

    Team.findByIdAndUpdate(teamId, {active: 0}, {new: true}, (err, teamUpdated) =>
    {
      if(err) return res.status(500).send({message: 'Cannot delete the team'});
      if(!teamUpdated) return res.status(404).send({message: 'The team doesn\'t exists'});

      return res.status(200).send({
        message: 'Team deleted'
      });
    });
  }
};

module.exports = controller;
