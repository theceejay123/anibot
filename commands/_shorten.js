const colors = require("../util/colors");
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "shorten",
  aliases: ["s", "sh", "short"],
  description: "Shortens a link.",
  execute(bot, msg, args) {
    msg.channel.send("Generating Link...").then((bot_msg) => {
      const link = `http://sh.onpaper.ca/link`;
      fetch(link, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: {
          url: args,
        },
      }).then(async (response) => {
        const jsonData = await response.json();
        await msg.channel.send(jsonData.link);
        msg.delete();
        bot_msg.delete();
      });
    });
  },
};
