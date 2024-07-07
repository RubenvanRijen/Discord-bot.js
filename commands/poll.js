module.exports = {
  name: "poll",
  aliases: ["d-t"],
  description: "start a poll",
  async execute(message, args) {
    await message.react("👍");

    setTimeout(() => {
      message.react("👎");
    }, 750);
  }
};

