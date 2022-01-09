const Game = require("../models/game");

const getGames = async () => {

    return await Game.find();
}

module.exports = {
    getGames,
}