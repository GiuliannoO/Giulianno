module.exports = (client) => {  
  client.log('Log', `Entrou como ${client.user.tag}!`);
  client.user.setPresence({ game: { name: 'Digite !ajuda', type: 0 } });
};

