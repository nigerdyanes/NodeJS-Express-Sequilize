"use strict";
const express = require("express");
const router = express.Router();

const PlayerController = require("../controllers/PlayerController");

router.get("/list-players", PlayerController.list);
router.post("/create-player", PlayerController.create);
router.patch("/update-player/:idPlayer", PlayerController.update);
router.delete("/delete-player/:idPlayer", PlayerController.delete);

module.exports = router;
