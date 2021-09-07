"use strict";
const express = require("express");
const router = express.Router();

const PlayerController = require("../controllers/PlayerController");

router.get("/list-players", PlayerController.list);
router.post("/create-player", PlayerController.create);
router.patch("/update-player", PlayerController.update);
router.delete("/delete-player", PlayerController.delete);

module.exports = router;
