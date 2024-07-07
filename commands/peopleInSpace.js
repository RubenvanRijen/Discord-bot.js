const axios = require("axios").default;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM("");
const $ = require("jquery")(window);

const { PEOPLE_INS_PACE_URL } = require("../config.json");


module.exports = {
  name: "people-space",
  aliases: ["d-t"],
  description: "Display number of people in space",
  async execute(message, args) {
    let astronauts;

    $.getJSON(PEOPLE_INS_PACE_URL, function(data) {
      astronauts = `Aantal mensen in de rumite: ${data.number}\n`;
      data.people.forEach(function(astonaut) {
        astronauts += `astronaut: ${astonaut.name} - `
          + `craft: ${astonaut.craft} \n`;
      });
      message.channel.send(astronauts);
    });

  }
};
