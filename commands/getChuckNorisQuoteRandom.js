const axios = require("axios").default;
const { CHUCK_NORRIS_API_URL } = require("../config.json");

module.exports = {
  name: "quote-random",
  aliases: ["d-t"],
  description: "Display One random chuck norris quote",
  async execute(message, args) {
    const url = `${CHUCK_NORRIS_API_URL}random`;
    await axios.get(url)
      .then(function(response) {
        // handle success
        return message.channel.send(response.data.value);
      })
      .catch(function(error) {
        // handle error
        return message.channel.send(error.message);
      });

  }
};
