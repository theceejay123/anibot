const colors = require("../util/colors");
const honorifics = require("../util/honorifics");

module.exports = {
  name: "kick",
  aliases: ["k", "boot", "throw"],
  description: "Kick a player from the guild.",
  guildOnly: true,
  execute(bot, msg, args) {
    const name = msg.member.nickname
      ? msg.member.nickname
      : msg.member.user.username;
    const h_response =
      honorifics[Math.floor(Math.random() * honorifics.length)];

    const mentioned = msg.guild.member(
      msg.mentions.users.first() || msg.guild.members.get(args[0])
    );
    const reason = args.join(" ").slice(22);
    if (!mentioned)
      return msg.channel.send({
        embed: {
          color: parseInt(`0x${colors.lightCreamPink.main}`),
          description: `...there isn't a user mentioned ${name}-${h_response}.`,
          footer: {
            text: `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
            icon_url: bot.user.displayAvatarURL
          }
        }
      });
    if (!msg.member.hasPermission("MANAGE_MESSAGES", false, true, true))
      return msg.channel.send({
        embed: {
          color: parseInt(`0x${colors.lightCreamPink.dark}`),
          description: `${name}-${h_response}! You don't have permissions to use this command.`,
          footer: {
            text: `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
            icon_url: bot.user.displayAvatarURL
          }
        }
      });
    if (
      mentioned.hasPermission("MANAGE_MESSAGES", false, true, true) ||
      mentioned.user.id === msg.member.user.id
    )
      return msg.channel.send({
        embed: {
          color: parseInt(`0x${colors.lightCreamPink.light}`),
          description: `Sorry ${name}-${h_response}! but it seems you can't kick this person...`,
          footer: {
            text: `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
            icon_url: bot.user.displayAvatarURL
          }
        }
      });

    return msg.guild
      .member(mentioned)
      .kick(reason)
      .then(() => {
        msg.channel.send({
          embed: {
            color: parseInt(`0x${colors.lightCreamPink.dark}`),
            description: `${mentioned.displayName} was kicked from the server. ${name}-${h_response} meanie (▰˘︹˘▰)`,
            footer: {
              text: `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
              icon_url: bot.user.displayAvatarURL
            }
          }
        });
      })
      .catch(err => {
        console.log(err.message);
        msg.channel.send({
          embed: {
            color: parseInt(`0x${colors.lightCreamPink.light}`),
            description: `An error occured. Please try again later.`,
            footer: {
              text: `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
              icon_url: bot.user.displayAvatarURL
            }
          }
        });
      });
  }
};
