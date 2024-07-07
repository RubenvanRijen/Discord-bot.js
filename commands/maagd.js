const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "maagd",
  aliases: [""],
  description: "lijst van sites voor maagden",
  async execute(message, args, bot) {

    const Embed = new MessageEmbed()
      .setTitle(`Top 20 porno sites :)`)
      .setColor(`RANDOM`)
      .setFooter(`Vooral voor Jarno`)
      .setDescription(
        `Voor de maagden onder ons hier de 20 beste porno sites :)
      1. https://www.pornhub.com/
      2. http://gotpd.link/xvideos
      3. https://xhamster.com/
      4. https://www.xnxx.com/
      5. https://beeg.com/
      6. https://www.pornhd.com/
      7. https://hqporner.com/
      8. https://www.eporner.com/
      9. https://sxyprn.com/
      10.https://spankbang.com/
      11.https://www.porntrex.com/
      12.https://daftsex.com/
      13.https://www.youjizz.com/
      14.https://vagina.nl/
      15.https://www.poldertube.nl/
      16.https://motherless.com/
      17.https://www.redtube.com/
      18.https://www.youporn.com/
      19.https://www.pornone.com/
      20.https://www.porn.com/
               `);
    message.channel.send(Embed);
  }
};

