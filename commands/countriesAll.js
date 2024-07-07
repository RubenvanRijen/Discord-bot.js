const axios = require("axios").default;
const arrayPaginate = require("array-paginate");

module.exports = {
  name: "all-countries",
  aliases: ["d-t"],
  description: "Display a list of countries",
  async execute(message, args) {
    let limit = args[0];
    let offset = args[1];

    if (limit > 50) {
      limit = 50;
    }
    let countries = [];
    await axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(function(response) {
        // handle success
        for (let k = 0; k < response.data.length; k++) {
          countries.push(`country ${k + 1}: ${response.data[k].name} \n`);
        }
      })
      .catch(function(error) {
        // handle error
        message.channel.send(error.message);
      });
    let data = arrayPaginate(countries, offset, limit);
    message.channel.send(data.docs);

  }
};
