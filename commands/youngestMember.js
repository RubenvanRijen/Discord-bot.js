const { formatDate } = require("../function");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "youngest",
  aliases: ["d-t"],
  description: "Get the youngest account creation date in the guild!",
  async execute(message, args, bot) {
    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => b.user.createdAt - a.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`The youngest member in ${message.guild.name}`)
      .setColor(`RANDOM`)
      .setFooter(`Date format: MM/DD/YYYY, ${formatDate(message.member.joinedAt)}`)
      .setDescription(
        `${mem.user.tag} is the youngest user in ${
          message.guild.name
        }! Account creation date: ${(mem.user.createdAt)}`
      );
    message.channel.send(Embed);

  }
};

