const axios = require("axios").default;
const { POKEMON_API_URL, POKEMON_IMAGE_URL } = require("../config.json");

module.exports = {
  name: "pokemon",
  aliases: ["d-t"],
  description: "Display a list of data of a  pokemon",
  async execute(message, args) {
    let pokemonData, pokemonImage;
    let pokemon = args[0];
    if (pokemon === "" || pokemon === undefined || pokemon === null) {
      return message.channel.send("geen pokemon naam opgegeven");
    }
    return axios.get(`${POKEMON_API_URL}/pokemon/${pokemon}/`)
      .then(async response => {
        // handle success
        pokemonData = (`id: ${response.data.id}\n`
          + `name: ${response.data.name}\n`
          + `height: ${response.data.height}\n`
          + `weight: ${response.data.weight}\n`);
        pokemonImage = { "image": { "url": getPokeImage(response.data.id) } };
        for (let k = 0; k < response.data.abilities.length; k++) {
          pokemonData += `ability ${k + 1}: ${response.data.abilities[k].ability.name} \n`;
        }
        await message.channel.send(pokemonData, { embed: pokemonImage });
      })
      .catch(function(error) {
        // handle error
        message.channel.send(error.message + " geen pokemon gevonden");
      });

  }
};

function getPokeImage(index) {
  return `${POKEMON_IMAGE_URL}${index}.png`;
}
