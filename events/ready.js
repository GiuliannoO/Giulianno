module.exports = (client) => {  
  client.log('Log', `Entrou como ${client.user.tag}!`);
  client.user.setPresence({ game: { name: 'Digite !ajuda', type: 0 } });
  let canal = client.channels.get('167715230082662401'); 
  canal.sendMessage("**O BoT está online!**").then(msg => {msg.delete(60000)});
};
