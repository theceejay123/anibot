const ytdl = require("ytdl-core");
const { play } = require("../util/music/play");

module.exports = {
  name: "play",
  aliases: ["p", "pl"],
  description: "Play music",
  async execute(bot, msg, args) {
    const serverQueue = bot.queue.get(msg.guild.id);
    const voiceChannel = msg.member.voice.channel;

    // Checks to see if the user that issued the command is in a voice channel
    if (!voiceChannel) {
      msg.delete({
        timeout: 1000,
      });
      return msg.channel.send(
        "You must be in a voice chat to play some tunes!"
      );
    }

    const permissions = voiceChannel.permissionsFor(msg.client.user);

    // Checks to see if the bot has permissions in the voice channel
    if (!permissions.has("CONNECT")) {
      msg.delete({
        timeout: 1000,
      });
      return msg.channel.send(
        "It seems I don't have permissions to be in the voice chat"
      );
    }

    // Checks to see if the bot has permissions to speak inside the voice channel
    if (!permissions.has("SPEAK")) {
      msg.delete({
        timeout: 1000,
      });
      return msg.channel.send(
        "It seems I don't have permissions to speak inside the voice chat"
      );
    }

    const songInfo = await ytdl.getInfo(args[0]);
    const songConstruct = {
      title: songInfo.videoDetails.title,
      url: songInfo.videoDetails.video_url,
      duration: songInfo.videoDetails.lengthSeconds,
    };

    if (!serverQueue) {
      const queueConstruct = {
        textChannel: msg.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true,
      };

      bot.queue.set(msg.guild.id, queueConstruct);
      queueConstruct.songs.push(songConstruct);

      try {
        queueConstruct.connection = await voiceChannel.join();
        play(msg.guild, queueConstruct.songs[0], bot);
      } catch (error) {
        bot.queue.delete(msg.guild.id);
        console.error(
          `There was an error connecting to the voice channel: ${error}`
        );
        return msg.channel.send(
          `There was an error connecting to the voice channel -  Contact the creator of ANIBOT to find out more.`
        );
      }
    } else {
      serverQueue.songs.push(songConstruct);
      await msg.delete({
        timeout: 1000,
      });
      return msg.channel.send(
        `**${songConstruct.title}** has been added to the queue!`
      );
    }

    msg.delete({
      timeout: 1000,
    });
  },
};
