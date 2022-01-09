const express = require("express");
const cors = require("cors");
const Conn = require("./conn/conn");
const gamesRoutes = require("./routes/games.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/games", gamesRoutes);
Conn();

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);

});
