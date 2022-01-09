const gamesService = require("../services/games.service");

const getGames = async (req, res) => {
    const games = await gamesService.getGames();
    res.send(games);
};

module.exports = {
    getGames,
}
