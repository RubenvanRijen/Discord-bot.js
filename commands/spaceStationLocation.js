const axios = require("axios").default;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const { SPACE_STATION_LOCATION_URL } = require("../config.json");


module.exports = {
  name: "space-station",
  aliases: ["d-t"],
  description: "Display location of spacestation",
  async execute(message, args) {
    let location;
    return axios.get(`${SPACE_STATION_LOCATION_URL}`)
      .then(function (response) {
        // handle success
        location = `Locatie space station: \n`;
        location += `longtitude: ${response.data.iss_position.longitude} \n`;
        location += `latitude: ${response.data.iss_position.latitude}`
        message.channel.send(location);
      })
      .catch(function (error) {
        // handle error
        message.channel.send(error.message);
      });
  }
};
