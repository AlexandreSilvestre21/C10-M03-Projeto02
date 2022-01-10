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

const updateGame = async (id, game) => {
    await Game.findByIdAndUpdate(id, game)
};

const deleteGame = async (id) => {
    return await Game.findByIdAndDelete(id);

}



module.exports = {
    getGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame
};