//"https://listen.moe/stream"


module.exports = (client, message, args) => {   
    
    
            if (message.member.voiceChannel) {
              message.member.voiceChannel.join()
                .then(connection => { 
                  message.reply('Eu conectei no canal com sucesso!');
                  connection.playArbitraryInput('https://listen.moe/stream');
                })
                .catch(console.log);
            } else {
              message.reply('Você precisa estar em um canal de voz para digitar o comando!');
            }          


};