const axios = require("axios").default;

module.exports = {
  name: "country",
  aliases: ["c"],
  description: "Display info of one country",
  async execute(message, args) {
    let countryData;
    if (!args[0]) {
      return message.reply("No country was given");
    }
    await axios.get(`https://restcountries.eu/rest/v2/name/${args[0]}?fullText=true`)
      .then(function(response) {
        // handle success
        countryData = (`name: ${response.data[0].name} \n` +
          `alphaCode: ${response.data[0].alpha2Code} \n` +
          `capital: ${response.data[0].capital} \n` +
          `region: ${response.data[0].region} \n` +
          `population: ${response.data[0].population} \n` +
          `currencies: ${response.data[0].currencies[0].name} \n` +
          `language: ${response.data[0].languages[0].name} \n` +
          `flag: ${response.data[0].flag} \n`
        );
        message.channel.send(countryData);

      })
      .catch(function(error) {
        // handle error
        message.channel.send(error.message);
      });
  }
};
