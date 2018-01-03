const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

//id canal musica = 375842517566095360
module.exports = (client, message, args) => { 

    let channel = client.channels.get('375842517566095360');    
    if ((channel) && args[1]) 
    {  
      channel.join()
      .then(connection => 
      { 
        message.reply('A música no **Youtube** escolhida foi iniciada com sucesso! :musical_note:').then(msg => {
          msg.delete(60000) });
        //const dispatcher = connection.playStream(ytdl(args[1])); 
        const stream = ytdl(args[1], { filter : 'audioonly' });
        const dispatcher = connection.playStream(stream, streamOptions);
        //dispatcher.setVolumeLogarithmic(5 / 5);              
      })
    .catch(console.log);
    } 
    message.delete(60000);
};