const Game = require("../models/game");

const getGames = async () => {

    return await Game.find();
}

const getGameById = async (id) => {
    return await Game.findById(id);
}

module.exports = {
    getGames,
    getGameById
}