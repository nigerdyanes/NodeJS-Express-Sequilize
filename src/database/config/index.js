const { configDB } = require("../../settings/config");

module.exports = {
  username: configDB.user,
  password: configDB.password,
  database: configDB.db,
  host: configDB.hostname,
  dialect: configDB.dialect,

  // Configurar Seeds
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  // Configurar Migraciones
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",

  define: {
    timestamps: true,
    underscored: true,
  },
};
