const ytdl = require("ytdl-core");

module.exports = {
  play(guild, song, bot) {
    const serverQueue = bot.queue.get(guild.id);

    if (!song) {
      serverQueue.voiceChannel.leave();
      bot.queue.delete(guild.id);
      return serverQueue.textChannel.send(
        "There is no song currently in the queue. Leaving!"
      ).then(msg => {
        msg.delete({
          timeout: 2000
        })
      }).catch(console.error);
    }

    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        module.exports.play(guild, serverQueue.songs[0], bot);
      })
      .on("error", () => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Now playing: **${song.title}**`);
  },
};