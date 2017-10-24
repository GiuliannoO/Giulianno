module.exports = (client, member) => {
  client.log('Log', `${member.user.tag} (${member.id}) se juntou a ${member.guild.name} (${member.guild.id})`);
  const welcomeChannel = member.guild.channels.find('name', 'welcome');
  if (welcomeChannel) {
    welcomeChannel.send(`Seja bem vindo(a) ${member.user.tag}! Digite **!ajuda** para ver os comandos do servidor.`);
  }
};