//"https://listen.moe/stream"
//id canal musica = 375842517566095360


module.exports = (client, message, args) => {   
    

    let channel = client.channels.get('375842517566095360');
            //if (message.member.voiceChannel) {
                if (channel) {
              
              channel.join()
                .then(connection => { 
                  message.reply('Eu conectei no canal com sucesso!');
                  connection.playArbitraryInput('https://listen.moe/stream');
                })
                .catch(console.log);
                } /*else {
              message.reply('Você precisa estar em um canal de voz para digitar o comando!');
            }  */
            

};