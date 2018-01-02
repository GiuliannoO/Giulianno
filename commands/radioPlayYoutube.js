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
        const dispatcher = connection.playStream(ytdl(args[1])).on('end', () => {
            console.log('o som acabou');
            channel.leave();
        }).on('error', error => { 
            console.error(error);
        });        
      })
    .catch(console.log);
    } 
    message.delete(60000);
};