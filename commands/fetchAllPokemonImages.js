const axios = require("axios").default;
const { POKEMON_API_URL, POKEMON_IMAGE_URL } = require("../config.json");

module.exports = {
  name: "pokemon-images",
  aliases: ["d-t"],
  description: "Display a list of pokemon images",
  async execute(message, args) {
    let pokemonImages = [];
    let limit = args[0];
    let offset = args[1];

    if (typeof offset === "undefined" || offset === 0) {
      offset = 1;
    }
    if (typeof limit === "undefined" || limit === 0) {
      limit = 10;
    }
    try {
      for (let i = 0; i < limit; i++) {
        let value = offset + i;
        pokemonImages.push({ "image": { "url": getPokeImage(value) } });
      }
      if (pokemonImages.length !== 0) {
        pokemonImages.forEach(function(image) {
          return message.channel.send({ embed: image });
        });
      } else {
        return message.channel.send("er zijn geen pokemons gevondenl");
      }

    } catch (error) {
      message.channel.send(error.message);
    }

  }
};

function getPokeImage(index) {
  return `${POKEMON_IMAGE_URL}${index}.png`;
}
