const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "slowmode",
  aliases: [""],
  description: "Set the slowmode for the channel!",
  async execute(message, args, bot) {
    if (args[0] === "remove") {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        return message.channel.send(
          `You do not have admin, ${message.author.username}`
        );
      }
      await message.channel.setRateLimitPerUser(0, "");
      message.channel.send(
        `The slowmode of this channel has been terminated`
      );
      return;
    }
    if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
      bot.prefix.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason === "No reason provided!";
    }
    await message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Set the slowmode of this channel too **${args[0]}** with the reason: **${reason}**`
    );
  }
};

