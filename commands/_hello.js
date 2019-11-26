module.exports = {
  name: "hello",
  aliases: ["yo", "hi"],
  description: "Say hello!",
  execute(msg, args = null) {
    return msg.channel.send(`Hello! ${msg.author}`);
  }
};
