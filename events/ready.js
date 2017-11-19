module.exports = (client, message) => {  
  client.log('Log', `Entrou como ${client.user.tag}!`);
  client.user.setPresence({ game: { name: 'Digite !ajuda', type: 0 } });
  client.channels.get('167715230082662401').sendMessage("**O BoT está Online!**").then(msg => {
    msg.delete(60000)
  });
};
