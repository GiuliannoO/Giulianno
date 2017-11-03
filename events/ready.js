//const Discord = require('discord.js');

module.exports = (client) => {
  client.log('Log', `Entrou como ${client.user.tag}!`);
  client.user.setPresence({ game: { name: 'Digite !ajuda', type: 0 } });

  /*let channel = client.channels.get('372892589252411393');
  //ou via nome
  //channel = client.channels.find('name', 'Musica');

  channel.join()
  .then(connection => console.log('Conectado'))
  .catch(console.error);*/

  /*voiceChannel.join()
  .then(connection => console.log('Conectado!'))
  .catch(console.error);*/

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }


 
};
