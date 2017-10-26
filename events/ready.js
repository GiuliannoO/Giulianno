//const Discord = require('discord.js');

module.exports = (client) => {
  client.log('Log', `Entrou como ${client.user.tag}!`);
  client.user.setPresence({ game: { name: 'Digite !ajuda', type: 0 } });

  let channel = client.channels.get('372892589252411393');
  //ou via nome
  //channel = client.channels.find('name', 'Musica');

  channel.join()
  //.then(connection => console.log('Conectado'))
  //.catch(console.error);
 
};
