const color = require("../colours.json");
const axios = require("axios");

class AniBot {
  Hello = msg => msg.channel.send(`Hello! ${msg.author}`);
  Ping = (msg, bot) =>
    msg.channel.send(`Pong! This message took ${bot.ping}ms.`);
  Help = (commandList, prefix, Discord, msg, bot) => {
    const help_list = new Discord.RichEmbed()
      .setColor(color.aqua)
      .setTitle("Command List")
      .setDescription("The following commands are available for you to use:");

    msg.channel.send({ embed: help_list });
  };

  ServerInfo = (Discord, msg, bot) => {
    let serverinfo = new Discord.RichEmbed()
      .setColor(color.blue_light)
      .setTitle("Server Info")
      .setThumbnail(msg.guild.iconURL)
      .setAuthor(`${msg.guild.name} Info`, msg.guild.iconURL)
      .addField("**Server Name:**", `${msg.guild.name}`, true)
      .addField("**Server Owner:**", `${msg.guild.owner}`, true)
      .addField("**Member Count:**", `${msg.guild.memberCount}`, true)
      .addField("**Role Count:**", `${msg.guild.roles.size}`, true)
      .setFooter(
        `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
        bot.user.displayAvatarURL
      );

    msg.channel.send({ embed: serverinfo });
  };

  UserInfo = (Discord, msg, bot) => {
    let userinfo = new Discord.RichEmbed()
      .setColor(color.red_light)
      .setTitle("Server Info")
      .setThumbnail(msg.guild.iconURL)
      .setAuthor(`${msg.author.username} Info`, msg.author.displayAvatarURL)
      .addField("**Username:**", `${msg.author.username}`, true)
      .addField("**Discriminator:**", `${msg.author.discriminator}`, true)
      .addField("**ID:**", `${msg.author.id}`, true)
      .addField("**Status:**", `${msg.author.presence.status}`, true)
      .addField("**Created At:**", `${msg.author.createdAt}`, true)
      .setFooter(
        `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
        bot.user.displayAvatarURL
      );
    msg.channel.send({ embed: userinfo });
  };

  /**
   * Method for adding a picture to discord chat.
   * @param {Object} Discord The discord client.
   * @param {Object} msg The message object of the bot.
   * @param {Object} bot The bot that is using discord.
   * @param {String} choice The choice between ***Cat, Dog, Meme***.
   * @param {Boolean} nfsw If the picture is not safe for work. ***Meme only***
   */
  Picture = async (Discord, msg, bot, choice, nfsw = false) => {
    const generate = await msg.channel.send("Generating Picture....");
    let url, title;
    switch (choice.toLowerCase()) {
      case "cat":
        url = "http://aws.random.cat/meow";
        title = `${msg.guild.name} Cats!`;
        break;
      case "dog":
        url = "https://dog.ceo/api/breeds/image/random";
        title = `${msg.guild.name} Dogs!`;
        break;
      case "meme":
        url = `https://apis.beta.duncte123.me/meme?nfsw=${nfsw}`;
        title = `${msg.guild.name} Meme Center!`;
        break;
      default:
        break;
    }

    axios
      .get(url)
      .then(response => {
        const json = response.data;
        if (!{ json })
          msg.channel.send("Gomenasai nii-chan.... I broke it. Try again!");

        const file = json.file
          ? json.file
          : json.message
          ? json.message
          : json.data.image;
        const picture = new Discord.RichEmbed()
          .setColor(color.cyan)
          .setAuthor(title, msg.guild.iconURL)
          .setImage(file)
          .setTimestamp()
          .setFooter(
            `@AniBot | Created by OnPaperHQ | ${bot.user.tag}`,
            bot.user.displayAvatarURL
          );
        msg.channel.send({ embed: picture });
      })
      .catch(error => console.log(error.message));

    generate.delete();
  };
}

module.exports = AniBot;
