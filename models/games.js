const mongoose = require('mongoose');

const gameModel = new mongoose.Schema({
    nome: {type: String, required: true},
    nota: {type: Numeric, required: true},
    plataforma: {type: String, required: true},
    valor: {type: String, required: true},
    anoLancamento: {type: String, required: true},
    dataCriacao: {type: Date, default: Date.now},
});

const Game = mongoose.model("games", gameModel);

module.exports = Game;