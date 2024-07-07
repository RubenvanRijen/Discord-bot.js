const axios = require("axios").default;

module.exports = {
  name: "capital",
  aliases: ["d-t"],
  description: "Display One capital of a country",
  async execute(message, args) {
    await axios.get(`https://restcountries.eu/rest/v2/capital/${country}`)
      .then(function (response) {
        // handle success
        response.data.forEach(function (data) {
          message.channel.send(data.name);

        });
      })
      .catch(function (error) {
        // handle error
        message.channel.send(error.message);
      });

  }
};
