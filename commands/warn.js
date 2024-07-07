module.exports = {
  name: "warn",
  aliases: [""],
  description: "Warn a user",
  async execute(message, args, bot) {
    let user = message.mentions.users.first();
    if (!user) return message.channel.send(`You did not mention a user!`);
    if (!args.slice(1).join(" ")) {
      return message.channel.send(`You did not specify a reason!`);
    }
    message.channel.send(
      `@${user.tag} has been warned with the reason of ${args
        .slice(1)
        .join(" ")}. They now have + 1 warn.`
    );


  }
};

