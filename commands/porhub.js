const PornHub = require("pornhub.js");
const pornhub = new PornHub();
const { MessageEmbed } = require("discord.js");
//https://github.com/pionxzh/pornhub.js/blob/HEAD/doc/DOCUMENT.md

module.exports = {
  name: "pornhub",
  aliases: [""],
  description: "pornhub video's",
  async execute(message, args, bot) {
    pornhub.search("Video", args[0]).then(res => {
      for (let k = 5; k > 0; k--) {
        const Embed = new MessageEmbed()
          .setTitle(`Pornhub to the max :)`)
          .setColor(`RANDOM`)
          .setFooter(`Vooral voor Jarno`)
          .setDescription(
            `Titel: ${res.data[k].title} \n
              Url: ${res.data[k].url} \n 
              Duration: ${res.data[k].duration} \n 
              HD: ${res.data[k].hd} \n 
              Premium: ${res.data[k].premium} \n 
              Preview: ${res.data[k].preview} \n `);
        message.channel.send(Embed);
      }
    });
  }
};

