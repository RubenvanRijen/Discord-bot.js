const axios = require("axios").default;

module.exports = {
  name: "donald-meme",
  aliases: ["d-t"],
  description: "Display One donald meme",
  execute(message, args) {
    return axios.get(`https://tronalddump.io/random/quote`)
      .then(function (response) {
        // handle success
        message.channel.send(response.data.value);
      })
      .catch(function (error) {
        // handle error
        message.channel.send(error.message);
      });

  }
};
