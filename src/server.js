"use strict";
const app = require("./app");
const config = require("./settings/config");
const { sequelize } = require("./database/models");
const PORT = config.port || 4000;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
  sequelize.authenticate().then(() => {
    console.log("Se ha establecido la conexión");
  });
});
