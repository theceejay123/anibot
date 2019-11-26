module.exports = {
  name: "config",
  description:
    "Configurations for each server. Such as setting which role is a moderator",
  execute(msg) {
    const member = msg.guild.owner.user.id === msg.member.user.id;
    if (member) {
      return msg.channel.send(`You are the owner onii-chan! granted access to top secret files.`)
    } else {
      return msg.channel.send(`Sorry onii-chan! It seems you don't have access to this command~!`)
    };
  }
};
