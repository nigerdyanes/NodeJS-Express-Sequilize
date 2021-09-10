"use strict";
const PlayerService = require("../services/PlayerService");
module.exports = {
  async list(req, res) {
    const data = await PlayerService.list();
    res.send(data);
  },

  async create(req, res) {
    const player = req.body;
    const newPlayer = await PlayerService.create(player);
    console.log(newPlayer);
    res.sendStatus(201);
  },

  async update(req, res) {
    const changes = req.body;
    const idPlayer = req.params.idPlayer;
    const isUpdated = await PlayerService.update(idPlayer, changes);
    if (isUpdated == 1) {
      res.sendStatus(200);
    }else{
      res.sendStatus(400);
    }
  },

  async delete(req, res) {
    const { idPlayer }  = req.params;
    const isDeleted = await PlayerService.delete(idPlayer);
    if (isDeleted === 1) {
      res.sendStatus(200)
    }else{
      res.sendStatus(400);
    }
  },
};
