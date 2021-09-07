"use strict";

const { Player } = require("../database/models");

module.exports = {
  async list() {
    const players = await Player.findAll();
    return players;
  },
  async create(player) {
    const result = await Player.create(player);
    return result;
  },
};
