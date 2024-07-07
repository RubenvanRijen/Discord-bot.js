const axios = require("axios").default;
const { CHUCK_NORRIS_API_URL } = require("../config.json");

module.exports = {
  name: "chuck-category",
  aliases: ["d-t"],
  description: "Display a category",
  async execute(message, args) {
    return await axios.get(`${CHUCK_NORRIS_API_URL}categories`)
      .then(function(response) {
        // handle success
        message.channel.send(response.data);
      })
      .catch(function(error) {
        // handle error
        message.channel.send(error.message);
      });

  }
};
