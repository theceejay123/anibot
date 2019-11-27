const colors = require("../colors");
const Discord = require("discord.js");

module.exports = {
  name: "info",
  aliases: ["server", "serverinfo", "i"],
  description: "The Information of the Server.",
  execute(bot, msg, args) {
    const serverinfo = new Discord.RichEmbed()
      .setColor(colors.lightGreen.dark)
      .setTitle("Server Info")
      .setThumbnail(msg.guild.iconURL)
      .setAuthor(`${msg.guild.name} Info`, msg.guild.iconURL)
      .addField("**Server Name:**", `${msg.guild.name}`, true)
      .addField("**Server Owner:**", `${msg.guild.owner}`, true)
      .addField("**Member Count:**", `${msg.guild.memberCount}`, true)
      .addField("**Role Count:**", `${msg.guild.roles.size}`, true)
      .setFooter(
        `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
        bot.user.displayAvatarURL
      );

    msg.channel.send({ embed: serverinfo });
  }
};
