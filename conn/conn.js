const mongoose = require("mongoose");

const Conn = () => {
    mongoose.connect("mongodb://localhost:27017/loja", {
        useNewUrlParser: true
    }).then(() => {
        console.log(`Mongo DB Conectato`)
    }).catch((err) => {
        return console.log(`Erro na conexão com o banco de dados: ${err}`)
    })
};

module.exports = Conn;

