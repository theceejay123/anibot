const colors = require("../util/colors");
const honorifics = require("../util/honorifics");

module.exports = {
  name: "hello",
  aliases: ["yo", "hi"],
  description: "Say hello!",
  execute(bot, msg, args) {
    const name = msg.member.nickname
      ? msg.member.nickname
      : msg.member.user.username;
    const response = honorifics.randomize();
    msg.channel.send({
      embed: {
        color: parseInt(`0x${colors.Pink.main}`),
        title: `Hiya, ${name}-${response}!`,
        description: `If ya need help, just type **${process.env.DISCORD_PREFIX}help** for more info.`,
        footer: {
          text: `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
          icon_url: bot.user.displayAvatarURL,
        },
      },
    });
  },
};
