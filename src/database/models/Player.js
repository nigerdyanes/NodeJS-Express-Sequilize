"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsTo(models.Country, { foreignKey: "countryId" });
    }
  }
  Player.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      dorsal: DataTypes.INTEGER,
      countryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Player",
    }
  );
  return Player;
};
