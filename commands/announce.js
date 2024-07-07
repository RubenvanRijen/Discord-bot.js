const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "announce",
  aliases: [""],
  description: "Get the bot to say what ever you want in a specific channel.",
  async execute(message, args, bot) {
    let rChannel = message.guild.channels.cache.find(channel => channel.name === args[0]);
    if (!rChannel)
      return message.channel.send(
        `You did not specify your channel to send the announcement too!`
      );
    let MSG = message.content
      .split(`${bot.prefix}announce ${rChannel.name} `)
      .join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    const _ = new MessageEmbed()
      .setTitle(`New announcement!`)
      .setDescription(`${MSG}`)
      .setColor("RANDOM");
    rChannel.send(_);
    message.delete();

  }
};

