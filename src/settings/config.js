const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    port: process.env.PORT || 4000,
    configDB:{
        hostname: process.env.DB_HOSTNAME || "localhost",
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "",
        dialect: process.env.DIALECT || "postgres",
        db: process.env.DB || "sequlize-practice"
    }
}