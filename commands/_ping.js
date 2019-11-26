const Discord = require("discord.js");

module.exports = {
  name: "ping",
  description: "Pings the user.",
  execute(bot, msg, args = null) {
    msg.channel.send("Pinging...").then(bot_msg => {
      const milliseconds = bot_msg.createdTimestamp - msg.createdTimestamp;
      const choices = [
        "Hai! here you go onii-chan!",
        "I don't think this is yours.",
        "Ha! take that onii-chan!"
      ];
      const response = choices[Math.floor(Math.random() * choices.length)];

      const ping = {
        color: 0xaaaaaa,
        description: `${response} It took ${milliseconds}ms to ping.`,
        timestamp: new Date(),
        footer: {
          text: `Bot Latency: ${milliseconds}ms | Execution time: ${Math.round(
            bot.ping
          )}ms`
        }
      };

      bot_msg.edit({ embed: ping });
    });
  }
};
