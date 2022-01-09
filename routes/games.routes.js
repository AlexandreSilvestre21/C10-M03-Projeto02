const express = require("express");

const gamesController = require("../controllers/games.controller")
const router = express.Router();

router.get("/get-games", gamesController.getGames);

module.exports = router;