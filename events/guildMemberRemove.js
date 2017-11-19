module.exports = (client, member) => {
    client.log('Log', `${member.user.tag} (${member.id}) saiu da ${member.guild.name} (${member.guild.id})`);
    //const welcomeChannel = member.guild.channels.find('name', 'principal');
    let welcomeChannel = client.channels.get('167715230082662401');
    if (welcomeChannel) {
      welcomeChannel.send(`Adeus @${member.user.tag}!`).then(msg => {
        msg.delete(60000)
      });
    }
  };