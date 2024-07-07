const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "ping",
  aliases: ["d-t"],
  description: "Returns latency and API ping",
  async execute(message, args, bot) {
    message.channel.send(`🏓 Pinging....`).then((msg) => {
      const _ = new MessageEmbed()
        .setTitle("Pong!")
        .setDescription(
          `🏓 Pong!\nLatency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\nAPI Latency is ${Math.round(bot.ws.ping)}ms`
        )
        .setColor("RANDOM");
      msg.edit(_);
      msg.edit("\u200B");
    });

  }
};

