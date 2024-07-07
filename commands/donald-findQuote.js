const axios = require("axios").default;

module.exports = {
  name: "donald-find-quote",
  aliases: ["d-t"],
  description: "Display and find donald trump quote",
  execute(message, args) {
    let tagValue = args[0].split("-").join(" ");
    let values = [];
    return axios.get(`https://tronalddump.io/search/quote?tag=${tagValue}`)
      .then(function(response) {
        // handle success
        let quotes = response.data._embedded.quotes;
        for (let k = 0; k < quotes.length; k++) {
          values.push(`quote ${k + 1}: ${quotes[k].value} \n`);
        }
        message.channel.send(values);
      })
      .catch(function(error) {
        // handle error
        message.channel.send(error.message);
      });

  }
};
