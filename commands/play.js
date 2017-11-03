//const channel = message.member.voiceChannel;

module.exports = (client, message, args) => {   
    
    /*channel.join()
    .then(connection => console.log('Conectado!'))
    .catch(console.error);*/

    /*if (!memberHasManageGuild(msg.member)) return
    
        let member = msg.member
        let channelId = member.voiceState ? member.voiceState.channelID : null
        if (!channelId) {
            // fail
            client.createMessage(msg.channel.id, 'Entre em um canal primeiro!')
        } else {
            // oh dang hello
            writeGuildConfig(msg.channel.guild.id, {Musica: channelId})
            joinVoice(client, msg.channel.guild.id, channelId)
            client.createMessage(msg.channel.id, '\\o/')
        }*/

        /*voiceChannel.join()
        .then(connection => console.log('Conectado!'))
        .catch(console.error);*/


        //if (message.content === '/join') {
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
          //}


};