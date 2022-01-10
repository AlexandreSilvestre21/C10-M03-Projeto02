const express = require("express");

const gamesController = require("../controllers/games.controller")
const router = express.Router();

router.get("/get-games", gamesController.getGames);
router.get("/get-game-by-id/:id", gamesController.getGameById);
router.post("/create", gamesController.createGame);
router.put("/update/:id", gamesController.updateGame);
router.delete("/delete/:id" ,gamesController.deleteGame);

module.exports = router;
