const Game = require("../models/game");

const getGames = async () => {

    return await Game.find();
}

const getGameById = async (id) => {
    return await Game.findById(id);
}

const createGame = async (game) => {
    return await Game.create(game);
};

module.exports = {
    getGames,
    getGameById,
    createGame,
};