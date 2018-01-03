const ytdl = require('ytdl-core');
var voiceChannel = null;
var ytAudioQueue = [];
//const streamOptions = { seek: 0, volume: 1 };





voiceChannel.on('speaking', (user, speaking) => {  
    // the audio has finished playing, so remove it from the queue and start playing the next song
    if (!speaking && ytAudioQueue.length > 1) {
        ytAudioQueue.pop();  
        if (voiceChannel == null) {
            JoinCommand(bot.channels.find(val => val.type === 'voice').name).then(function() {
                PlayStream(ytAudioQueue.first);   });
        } else { PlayStream(ytAudioQueue.first);  }   }
});


function PlayCommand(searchTerm) {
  //bot.sendMessage("Searching Youtube for audio...");
  YoutubeSearch(searchTerm);
}


function JoinCommand(channelName) {
    
        if (voiceChannel) {
            voiceChannel.disconnet();
        }
    
        var voiceChannel = GetChannelByName(channelName);
        return voiceChannel.join();
    }


function QueueYtAudioStream(videoId) {
  var streamUrl = `https://www.youtube.com/watch?v=${videoId}`;
  ytAudioQueue.push(streamUrl);
}

// plays a given stream
function PlayStream(streamUrl) {

  const streamOptions = {seek: 0, volume: 1};
  console.log("Streaming audio from " + streamUrl);

  if (streamUrl) {
      const stream = ytdl(streamUrl, {filter: 'audioonly'});
      const dispatcher = bot.voiceConnections.first().playStream(stream, streamOptions);
  }
}








//id canal musica = 375842517566095360
module.exports = (client, message, args) => {
    
    /*let channel = client.channels.get('375842517566095360');    
    if (channel) 
    {  
      channel.join()
      .then(connection => 
      { 
        message.reply('A música no **Youtube** escolhida foi iniciada com sucesso! :musical_note:').then(msg => {
          msg.delete(60000) });
          //const stream = ytdl(`${args.join(' ')}`, { filter: 'audioonly' });
          const stream = ytdl(ytAudioQueue.first, { filter: 'audioonly' });
          const dispatcher = connection.playStream(stream);  
      })
    .catch(console.log);
    }
    else
    {        
       PlayStream(ytAudioQueue.first);        
    }
    message.delete(60000);*/
    PlayCommand(parameters.join(" "), message);
};