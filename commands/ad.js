const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ad",
  aliases: [""],
  description: "Advertise your server",
  async execute(message, args, bot) {
    let Str = message.content.slice(bot.prefix.length + 2 + 1);
    if (!args[0])
      return message.channel.send(`You did not specify your advert!`);
    bot.channels.cache
      .get("694542650556153901")
      .send(
        new MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setTitle(`New advertisement from ${message.author.tag}!`)
          .setDescription(Str)
          .setColor(`BLUE`)
      );


  }
};

