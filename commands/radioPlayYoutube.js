//id canal musica = 375842517566095360
module.exports = (client, message, args) => { 

    let channel = client.channels.get('375842517566095360');    
    if (channel) 
    {  
      channel.join()
      .then(connection => 
      { 
        const video = queue[0];
        console.log(video.webpage_url);
        message.reply('A música no **Youtube** escolhida foi iniciada com sucesso! :musical_note:').then(msg => {
          msg.delete(60000) });
        //const dispatcher = connection.playStream(ytdl(args[1])); 
        let dispatcher = connection.playStream(ytdl(video.webpage_url, {filter: 'audioonly'}), {seek: 0, volume: (DEFAULT_VOLUME/100)}); 
        //dispatcher.setVolumeLogarithmic(5 / 5);              
      })
    .catch(console.log);
    } 
    message.delete(60000);

};