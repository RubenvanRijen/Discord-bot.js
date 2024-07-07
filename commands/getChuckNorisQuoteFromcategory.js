const axios = require("axios").default;
const { CHUCK_NORRIS_API_URL } = require("../config.json");

module.exports = {
  name: "quote-category",
  aliases: ["d-t"],
  description: "Display One random chuck norris quote",
  async execute(message, args) {
    return await axios.get(`${CHUCK_NORRIS_API_URL}random?category=${args[0]}`)
      .then(function(response) {
        // handle success
        message.channel.send(response.data.value);
      })
      .catch(function(error) {
        // handle error
        message.channel.send(error.message);
      });

  }
};
