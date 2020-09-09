"use strict";

const { Client, Collection } = require("discord.js");

module.exports = class extends Client {
  constructor(config) {
    super({
      disableEveryone: true,
      disabledEvents: ["TYPING_START"],
      disableMentions: "everyone",
    });

    this.commands = new Collection();
    this.queue = new Map();
    this.config = config;
  }
};
