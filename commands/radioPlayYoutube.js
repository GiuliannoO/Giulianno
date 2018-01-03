const ytdl = require('ytdl-core');
var servers = {};
//const streamOptions = { seek: 0, volume: 1 };

//id canal musica = 375842517566095360
module.exports = (client, message, args) => {
    
    let channel = client.channels.get('375842517566095360');    
    if (channel) 
    {  
      channel.join()
      .then(connection => 
      { 
        /*message.reply('A música no **Youtube** escolhida foi iniciada com sucesso! :musical_note:').then(msg => {
          msg.delete(60000) });
          //const stream = ytdl(`${args.join(' ')}`, { filter: 'audioonly' });
          const stream = ytdl(ytAudioQueue.first, { filter: 'audioonly' });
          const dispatcher = connection.playStream(stream);  */

          var server = servers[message.guild.id];
          server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
          server.queue.shift();
          server.dispatcher.on("end", function(){
            if(server.queue[0]) play(connection, message);
            else connection.disconnect();     

          });
      })
    .catch(console.log);
    }
    message.delete(60000);    
};