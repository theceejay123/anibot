const colors = require("../util/colors");
const Discord = require("discord.js");

module.exports = {
  name: "user",
  aliases: ["u", "userinfo"],
  description: "The information of the user.",
  execute(bot, msg, args) {
    const mentioned = msg.guild.member(
      msg.mentions.users.first() || msg.guild.members.get(args[0])
    );
    const member = mentioned ? mentioned.user : msg.author;

    const userinfo = new Discord.RichEmbed()
      .setColor(colors.lightCreamPink.dark)
      .setTitle("Server Info")
      .setThumbnail(msg.guild.iconURL)
      .setAuthor(`${member.username}'s Info`, member.displayAvatarURL)
      .addField("**Username:**", `${member.username}`)
      .addField("**Discriminator:**", `${member.discriminator}`)
      .addField("**ID:**", `${member.id}`)
      .addField("**Status:**", `${member.presence.status}`)
      .addField("**Created At:**", `${member.createdAt}`)
      .setFooter(
        `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
        bot.user.displayAvatarURL
      );
    msg.channel.send({ embed: userinfo });
  },
};
