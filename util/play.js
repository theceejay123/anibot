const ytdl = require("ytdl-core");

module.exports = {
  async play(guild, song, serverQueue, bot) {
    serverQueue = bot.queue.get(guild.id);

    if (!song) {
      serverQueue.voiceChannel.leave();
      bot.queue.delete(guild.id);
      return msg.channel.send("There is no song currently in the queue.");
    }

    const dispatcher = serverQueue.connection
      .playStream(ytdl(song.url), { filter: "audioonly" })
      .on("end", () => {
        serverQueue.songs.shift();
        console.log(serverQueue.songs);
        module.exports.play(guild, serverQueue.songs[0], serverQueue, bot);
      })
      .on("error", () => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
  },
};
