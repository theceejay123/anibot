/* 
Discord Bot - AniBot
Description: A simple bot using discord.js as the library
Author: Janeal Pimentel
Created: 9/14/2019
Modified: 11/23/2019
*/

// Variables
const Discord = require("discord.js");
const config = require("./config.json");

// Component
const AniBot = require("./components/_Commands");

const bot = new Discord.Client({ disableEveryone: true });
const aniBot = new AniBot();

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online.`);
  bot.user.setActivity("w/ Rin-chan", {
    type: "STREAMING",
    url: "http://www.twitch.tv/onpaperhq"
  });
});

bot.on("message", async msg => {
  if (msg.author.bot || msg.channel.type === "dm") return;

  const prefix = config.prefix;
  const commandList = config.commandList;
  const msgArray = msg.content.split(" ");
  const cmd = msgArray[0];

  switch (cmd.toLocaleLowerCase()) {
    case `${prefix}${commandList[0]}`:
      aniBot.Hello(msg);
      break;
    case `${prefix}${commandList[1]}`:
      aniBot.Ping(msg, bot);
      break;
    case `${prefix}${commandList[2]}`:
      aniBot.Help(commandList, prefix, Discord, msg, bot);
      break;
    case `${prefix}${commandList[3]}`:
      aniBot.ServerInfo(Discord, msg, bot);
      break;
    case `${prefix}${commandList[4]}`:
      aniBot.UserInfo(Discord, msg, bot);
      break;
    case `${prefix}${commandList[5]}`:
      aniBot.Picture(Discord, msg, bot, "cat");
      break;
    case `${prefix}${commandList[6]}`:
      aniBot.Picture(Discord, msg, bot, "dog");
      break;
    case `${prefix}${commandList[7]}`:
      aniBot.Picture(Discord, msg, bot, "meme", true);
      break;
    default:
      break;
  }
});

bot
  .login(config.token)
  .then(console.log(`Do not share this token to anyone: ${config.token}`))
  .catch(console.error);
