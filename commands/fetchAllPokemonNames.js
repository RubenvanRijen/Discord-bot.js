const axios = require("axios").default;
const { POKEMON_API_URL } = require("../config.json");

module.exports = {
  name: "pokemon-names",
  aliases: ["d-t"],
  description: "Display a list of pokemon names",
  async execute(message, args) {
    let pokemons = [];
    return await axios.get(`${POKEMON_API_URL}/pokemon?offset=${args[0]}&limit=${args[1]}`)
      .then(function(response) {
        // handle success
        for (let k = 0; k < response.data.results.length; k++) {
          pokemons.push(response.data.results[k].name);
        }
        message.channel.send(pokemons);
      })
      .catch(function(error) {
        // handle error
        message.channel.send(error.message);
      });

  }
};
