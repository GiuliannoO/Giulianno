module.exports = (client, member) => {
  client.log('Log', `${member.user.tag} (${member.id}) has joined ${member.guild.name} (${member.guild.id})`);
  const welcomeChannel = member.guild.channels.find('name', 'welcome');
  if (welcomeChannel) {
    welcomeChannel.send(`Please welcome ${member.user.tag} to our wonderful guild!`);
  }
};