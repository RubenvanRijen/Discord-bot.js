const axios = require("axios").default;

module.exports = {
  name: "donald-tags",
  aliases: ["d-t"],
  description: "Display all the donald tags",
  execute(message) {
    let commands = message.client.commands.array();
    let tags = [];
    return axios.get(`https://tronalddump.io/tag`)
      .then(function(response) {
        // handle success
        let data = response.data._embedded.tag;
        data.forEach(function(e) {
          tags.push(e.value);
        });
        return message.channel.send(tags);
      })
      .catch(function(error) {
        // handle error
        return message.channel.send(error.message);
      });
  }
};
