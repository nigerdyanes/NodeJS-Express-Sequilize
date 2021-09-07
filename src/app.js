"use strict";
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const PlayerRoutes = require("./routes/PlayerRoutes");

const app = express();

// Settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

//Routes
app.use("/api", PlayerRoutes);

module.exports = app;
