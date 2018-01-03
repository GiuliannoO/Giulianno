//id canal musica = 375842517566095360
module.exports = (client, message, args) => { 

    let voiceChannel = client.channels.get('375842517566095360');    
    /*if (channel) 
    {  
      channel.join()
      .then(connection => 
      { 
        message.reply('A música no **Youtube** escolhida foi iniciada com sucesso! :musical_note:').then(msg => {
          msg.delete(60000) });
        //const dispatcher = connection.playStream(ytdl(args[1])); 
        let youtube = connection.playStream(ytdl(args[1], {filter: 'audioonly'}), {seek: 0, volume: (DEFAULT_VOLUME/100)});
        let dispatcher = voiceConnection.playStream(youtube);
        //dispatcher.setVolumeLogarithmic(5 / 5);              
      })
    .catch(console.log);
    } 
    message.delete(60000);*/

    if (!voiceChannel) {
    }
    voiceChannel.join().then(connection => {
    let stream = yt(args.join(" "), { audioonly: true });
    yt.getInfo(args.join(" "), function(err, info) {
    const title = info.title;
    console.log(`${message.author.username}, Queued the song ${title}.`);
    message.channel.sendMessage(`\ ${title}`);
    });
    const dispatcher = connection.playStream(stream);
    dispatcher
    .on("end", () => {
    voiceChannel.leave();
    var channel = message.member.voiceChannel;
    
            if (!message.guild.voiceConnection) channel
                .join()
                .then(function(connection) {
                  play(connection, message);
                }); 
                console.error(Error);
                const video= ('ytdl') 
          
         });
      });
    };          
  //  });
//};