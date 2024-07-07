
module.exports = {
  name: "ban",
  aliases: ["d-t"],
  description: "ban a player",
  async execute(message, args) {
    const { member, mentions } = message;
    const tag = `<@${member.id}>`;

    if (
      member.hasPermission("ADMINISTRATOR") ||
      member.hasPermission("BAN_MEMBERS")
    ) {
      const target = mentions.users.first();
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        await targetMember.ban();
        message.channel.send(`${tag} That user has been`);
      } else {
        message.channel.send(`${tag} Please specify someone to ban.`);
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      );
    }


  }
};

