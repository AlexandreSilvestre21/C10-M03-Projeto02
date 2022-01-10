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

    if( !game || 
        !game.nome || 
        !game.nota || 
        !game.plataforma || 
        !game.valor || 
        !game.anoLancamento
    ) {
        res
        .status(400)
        .send({message: `Você não enviou todos os dados necessários para a criação do jogo.`});
    };

    await gamesService.createGame(game).then(() => {
        res.send({message: "Game criado com sucesso!"})

    }).catch((err) => {
        res.status(500).send({message: `Erro no servidor: ${err}`});
    });
};

const updateGame = async (req, res) => {
    const id = req.params.id;
    const gameEdit = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({message: "Id inválido!"});
    }

    if( !gameEdit || 
        !gameEdit.nome || 
        !gameEdit.nota || 
        !gameEdit.plataforma || 
        !gameEdit.valor || 
        !gameEdit.anoLancamento
    ) {
        res
        .status(400)
        .send({
            message: `Você não enviou todos os dados necessários para a edição do jogo.`});
    };

    await gamesService
        .updateGame(id, gameEdit)
        .then(() => {

        res.send({message: `Jogo editado com sucesso!`})
    }).catch((err) => {

        res.status(500).send({message: `Erro no servidor: ${err}` });
    });
};

const deleteGame = async (req, res) => {
    const id = req.params.id;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({message: "Id inválido!"});
    }

    await gamesService
        .deleteGame(id)
        .then(() => {
          res.send({message: `Jogo excluído com sucesso`})
    })
        .catch((err) => {
        res.status(500).send({message: `Erro no servidor: ${err}` });
    });
};


module.exports = {
    getGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame,
};

