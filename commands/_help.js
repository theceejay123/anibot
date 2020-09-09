const colors = require("../util/colors");
const honorifics = require("../util/honorifics");

module.exports = {
  name: "help",
  aliases: ["h", "?"],
  execute(bot, msg, args) {
    const name = msg.member.nickname
      ? msg.member.nickname
      : msg.member.user.username;
    const response = honorifics.randomize();
  },
};
