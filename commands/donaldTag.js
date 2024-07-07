const axios = require("axios").default;

module.exports = {
  name: "donald-tag",
  aliases: ["d-t"],
  description: "Display One donald tag",
  execute(message, args) {
    return axios.get(`https://tronalddump.io/tag/${args[0]}`)
      .then(function(response) {
        // handle success
        return message.channel.send(response.data._links.self.href);
      })
      .catch(function(error) {
        // handle error
        return message.channel.send(error.message);
      });

  }
};
