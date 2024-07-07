module.exports = {
  name: "welcome-message",
  aliases: ["d-t"],
  description: "send a welcome message",
  async execute(message, args, client) {
    const channelId = "744669480000421983"; // welcome channel
    const targetChannelId = "744669480000421983"; // rules and info
    client.on("guildMemberAdd", (member) => {
      const message = `Please welcome <@${
        member.id
      }> to the server! Please check out ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`;
      const channel = member.guild.channels.cache.get(channelId);
      channel.send(message);
    });
  }
};

