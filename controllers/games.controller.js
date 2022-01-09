const gamesService = require("../services/games.service");
const mongoose = require("mongoose");

const getGames = async (req, res) => {
    const games = await gamesService.getGames();
    res.send(games);
};

const getGameById = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({message: "Id inválido!"});
    }

    const game = await gamesService.getGameById(id);

    if(!game) {
        res.status(404).send({message: "Game não encontrado"});
    }

    res.send(game);
}; 

const createGame = async (req,res) => {
    const game = req.body;
    await gamesService.createGame(game).then(() => {
        res.send({message: "Game criado com sucesso!"})

    }).catch((err) => {
        res.status(500).send({message: `Erro no servidor: ${err}`});
    });
};

module.exports = {
    getGames,
    getGameById,
    createGame
};

