const colors = require("../util/colors");
const honorifics = require("../util/honorifics");

module.exports = {
  name: "help",
  aliases: ["h", "?"],
  execute(bot, msg, serverQueue, args) {
    const name = msg.member.nickname
      ? msg.member.nickname
      : msg.member.user.username;
    const response = honorifics.randomize();
  },
};
