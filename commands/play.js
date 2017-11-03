/*INSTALL-
ffmpeg - npm install ffmpeg-binaries
an opus encoder, choose one from below:
npm install opusscript
npm install node-opus*/ 

//https://listen.moe/stream
//http://momori.animenfo.com:8000/listen.pls
//id canal musica = 375842517566095360


module.exports = (client, message, args) => {   
    

    let channel = client.channels.get('375842517566095360');
            //if (message.member.voiceChannel) {
                if (channel) {
              
              channel.join()
                .then(connection => { 
                  message.reply('Eu conectei no canal com sucesso!');
                  connection.playArbitraryInput('http://momori.animenfo.com:8000/listen.pls');
                })
                .catch(console.log);
                } /*else {
              message.reply('Você precisa estar em um canal de voz para digitar o comando!');
            }  */
            

};