//id canal afk = 167715581150101504

module.exports = (client, message, args) => { 

    const voiceChannel = message.member.voiceChannel;

    if (!voiceChannel){
        return message.channel.send(":x: You must be in a voice channel first!");
      }


      voiceChannel.join()
      .then(message => message.channel.send("I joined the channel successfully!")); 

    
    
};