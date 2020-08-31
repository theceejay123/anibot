const colors = require("../util/colors");
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "cat",
  aliases: ["kitty", "feline", "kat"],
  description: "Picture of a cat.",
  execute(bot, msg, serverQueue, args) {
    msg.channel.send("Generating Picture...").then((bot_msg) => {
      const url = `http://aws.random.cat/meow`;
      const title = `${msg.guild.name} Cats!`;
      fetch(url).then(async (response) => {
        const jsonData = await response.json();
        const picture = new Discord.RichEmbed()
          .setColor(colors.lightBlue.dark)
          .setAuthor(title, msg.guild.iconURL)
          .setImage(jsonData.file)
          .setTimestamp()
          .setFooter(
            `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
            bot.user.displayAvatarURL
          );

        bot_msg.edit({ embed: picture });
      });
    });
  },
};
