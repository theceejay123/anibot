module.exports = {
  name: "kick",
  description: "Kick a player from the guild.",
  guildOnly: true,
  execute(msg, args = null) {
    const member = msg.guild.member(
      msg.mentions.users.first() || msg.guild.members.get(args[0])
    );

    const reason = args.join(" ").slice(22);

    if (!member)
      return msg.channel.send(`...there isn't a user mentioned onii-chan. `);
    if (!msg.member.hasPermission("MANAGE_MESSAGES"))
      return msg.channel.send(
        `Onii-chan! You don't have permissions to use this command.`
      );
    if (member.hasPermission("MANAGE_MESSAGES") && msg.member.guild.roles.find(role => role.name.toLowerCase() === "bots").name.toLowerCase() !== "onpaperhq")
      return msg.channel.send(
        `Sorry Onii-chan! but it seems you can't kick this person...`
      );

    return msg.guild
      .member(member)
      .kick(reason)
      .then(() => {
        msg.channel.send(
          `${member.displayName} was kicked from the server. Onii-chan meanie (▰˘︹˘▰)`
        );
      })
      .catch(err => {
        console.log(err.message);
        msg.channel.send(`Sorry, an error occured. Please try again later.`);
      });
  }
};
