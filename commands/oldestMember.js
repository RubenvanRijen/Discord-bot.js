const { formatDate } = require("../function");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "oldest",
  aliases: ["d-t"],
  description: "Get the oldest account creation date in the guild!",
  async execute(message, args, bot) {
    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => a.user.createdAt - b.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`The oldest member in ${message.guild.name}`)
      .setColor(`RANDOM`)
      .setFooter(`Date format: MM/DD/YYYY, ${formatDate(message.member.joinedAt)}`)
      .setDescription(
        `${mem.user.tag} is the oldest user in ${
          message.guild.name
        }! Account creation date: ${(mem.user.createdAt)}`
      );
    message.channel.send(Embed);

  }
};

