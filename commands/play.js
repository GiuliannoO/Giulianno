//"https://listen.moe/stream"
connection.playArbitraryInput('https://listen.moe/stream');

module.exports = (client, message, args) => {   
    
    
        //if (message.content === '/join') {
            // Only try to join the sender's voice channel if they are in one themselves
            let modRole = message.guild.roles.find("name", "Mestre");
            if(message.member.roles.has(modRole.id)) {

            if (message.member.voiceChannel) {
              message.member.voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                  message.reply('Eu conectei no canal com sucesso!');
                })
                .catch(console.log);
            } else {
              message.reply('Você precisa estar em um canal de voz para digitar o comando!');
            }

        }else{
            message.reply("Você não tem poder para usar este comando! ");
        }
          //}


};