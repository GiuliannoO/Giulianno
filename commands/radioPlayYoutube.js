import { VoiceChannel } from "discord.js";

//id canal musica = 375842517566095360
module.exports = (client, message, args) => { 
    let channel = client.channels.get('375842517566095360');
    
    if (channel) 
    {  
      channel.join()
      .then(connection => 
      { 
        message.reply('A música no **Youtube** escolhida foi iniciada com sucesso! :musical_note:').then(msg => {
          msg.delete(60000)
        });
        connection.playStream(ytdl(args[1]));        
      })
    .catch(console.log);
    } 
    message.delete(60000);
};