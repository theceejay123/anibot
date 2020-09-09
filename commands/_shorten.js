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
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({
          url: args[0],
        }),
      }).then(async (response) => {
        const data = await response.json();
        msg.delete();
        bot_msg.edit(data.link);
      });
    });
  },
};
