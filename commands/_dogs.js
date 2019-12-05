const colors = require("../util/colors");
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "dog",
  aliases: ["doggy", "pup", "puppy", "canine"],
  description: "Generates pictures of dogs.",
  execute(bot, msg, args) {
    msg.channel.send("Generating Picture...").then(bot_msg => {
      const url = `https://dog.ceo/api/breeds/image/random`;
      const title = `${msg.guild.name} Dogs!`;
      fetch(url).then(async response => {
        const jsonData = await response.json();
        const picture = new Discord.RichEmbed()
          .setColor(colors.PinkShade.main)
          .setAuthor(title, msg.guild.iconURL)
          .setImage(jsonData.message)
          .setTimestamp()
          .setFooter(
            `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
            bot.user.displayAvatarURL
          );

        bot_msg.edit({ embed: picture });
      });
    });
  }
};
