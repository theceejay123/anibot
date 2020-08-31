const colors = require("../util/colors");
const Discord = require("discord.js");

module.exports = {
  name: "info",
  aliases: ["server", "serverinfo", "i"],
  description: "The Information of the Server.",
  execute(bot, msg, serverQueue, args) {
    const serverinfo = new Discord.RichEmbed()
      .setColor(colors.lightGreen.dark)
      .setTitle("Server Info")
      .setThumbnail(msg.guild.iconURL)
      .setAuthor(`${msg.guild.name} Info`, msg.guild.iconURL)
      .addField("**Server Name:**", `${msg.guild.name}`)
      .addField("**Server Owner:**", `${msg.guild.owner}`)
      .addField("**Member Count:**", `${msg.guild.memberCount}`)
      .addField("**Role Count:**", `${msg.guild.roles.size}`)
      .setFooter(
        `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
        bot.user.displayAvatarURL
      );

    msg.channel.send({ embed: serverinfo });
  },
};
