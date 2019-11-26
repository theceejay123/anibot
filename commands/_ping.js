module.exports = {
  name: "ping",
  description: "Pings the user.",
  execute(msg, args = null) {
    const ping = {
      color: 0xaaaaaa,
      description: `Pong! It took ${new Date().getTime() - new Date().getTime()}ms to ping.`,
      timestamp: new Date(),
      footer: {
        text: `Bot Latency: ${NaN}ms | Execution time: ${NaN}ms`
      }
    };
    return msg.channel.send({ embed: ping });
  }
};
