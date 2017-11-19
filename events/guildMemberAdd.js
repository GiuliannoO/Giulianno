/*module.exports = (client, member) => {
  client.log('Log', `${member.user.tag} (${member.id}) se juntou a ${member.guild.name} (${member.guild.id})`);
  const welcomeChannel = member.guild.channels.find('name', 'principal');
  if (welcomeChannel) {
    welcomeChannel.send(`Seja bem vindo(a) @${member.user.tag}! Caso precisar de algo digite **!ajuda** para ver os comandos do servidor.`).then(msg => {
      msg.delete(60000)
    });
  }
};*/