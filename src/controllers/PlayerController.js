"use strict";
const PlayerService = require("../services/PlayerService");
module.exports = {
  async list(req, res) {
    const data = await PlayerService.list();
    res.json({
      response: data,
    });
  },

  async create(req, res) {
    const player = req.body;
    const newPlayer = await PlayerService.create(player);
    res.json({
      response: newPlayer,
    });
  },

  async update(req, res) {
    res.json({
      response: {},
    });
  },

  async delete(req, res) {
    res.json({
      response: {},
    });
  },
};
