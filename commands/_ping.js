const colors = require("../util/colors");
const honorifics = require("../util/honorifics");

module.exports = {
  name: "ping",
  aliases: ["latency", "p"],
  description: "Pings the user.",
  execute(bot, msg, args) {
    msg.channel.send("Pinging...").then(bot_msg => {
      const name = msg.member.nickname
        ? msg.member.nickname
        : msg.member.user.username;
      const milliseconds = bot_msg.createdTimestamp - msg.createdTimestamp;
      const h_response =
        honorifics[Math.floor(Math.random() * honorifics.length)];
      const phrases = [
        `Hai! There you go ${name}-${h_response}. (」°ロ°)」`,
        `Are you sure this is you ${name}-${h_response}? (＿ ＿*) Z z z`,
        `Please tell me ${name}-${h_response} is joking...  ＼(º □ º l|l)/`,
        `Take that ${name}-${h_response}! ┬┴┬┴┤･ω･)ﾉ`,
        `${name}-${h_response} is sooooo slow	(.❛ ᴗ ❛.)`
      ];
      const p_response = phrases[Math.floor(Math.random() * phrases.length)];
      const ping = {
        color: parseInt(`0x${colors.lightBlue.light}`),
        title: p_response,
        description: `It took ${milliseconds}ms to ping.`,
        timestamp: new Date(),
        footer: {
          text: `Bot Latency: ${milliseconds}ms | Execution time: ${Math.round(
            bot.ping
          )}ms`,
          icon_url: bot.user.displayAvatarURL
        }
      };

      bot_msg.edit({ embed: ping });
    });
  }
};
