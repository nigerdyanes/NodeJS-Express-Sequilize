"use strict";
const express = require("express");
const router = express.Router();
const { Country } = require("../database/models");

router.post("/create-country", async (req, res) => {
  await Country.create(req.body);
  res.sendStatus(201)
});

module.exports = router;
