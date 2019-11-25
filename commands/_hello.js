module.exports = {
  name: "hello",
  description: "Say hello!",
  execute(msg, args = null) {
    return msg.channel.send(`Hello! ${msg.author}`);
  }
};
