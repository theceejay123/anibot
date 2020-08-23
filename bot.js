/* 
Discord Bot - AniBot
Description: A simple bot using discord.js as the library
Author: Janeal Pimentel
Created: 9/14/2019
Modified: 11/23/2019
*/

const Discord = require("discord.js");
const fs = require("fs");
const Client = require("./client/_client");

require("dotenv").config();

/* Components */
const bot = new Client();
bot.commands = new Discord.Collection();

const queue = new Map();

const commandList = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandList) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online.`);
  bot.user.setActivity("w/ Rin-chan", {
    type: "STREAMING",
    url: "http://www.twitch.tv/onpaperhq",
  });
});

bot.on("message", async (msg) => {
  if (msg.author.bot || msg.channel.type === "dm") return;
  if (!msg.content.startsWith(process.env.DISCORD_PREFIX)) return;

  const args = msg.content.slice(1).split(/ +/);
  const c_name = args.shift().toLowerCase();
  const command =
    bot.commands.get(c_name) ||
    bot.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(c_name));

  try {
    command.execute(bot, msg, args);
  } catch (error) {
    return;
  }
});

bot
  .login(process.env.TOKEN_KEY)
  .then(
    console.log(`Do not share this token to anyone: ${process.env.TOKEN_KEY}`)
  )
  .catch(console.error);
