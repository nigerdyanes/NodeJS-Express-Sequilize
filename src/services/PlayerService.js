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
  async update(id,changes){
    const result = await Player.update(changes,
      {where:{id}}
    );
    return result;
  },
  async delete(id){
    const result = await Player.destroy({
      where:{id}
    })
    return result;
  }
};
