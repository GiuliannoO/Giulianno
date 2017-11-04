/*INSTALL-
ffmpeg - npm install ffmpeg-binaries
an opus encoder, choose one from below:
npm install opusscript
npm install node-opus*/ 

//Radio Moe : https://listen.moe/stream
//Radio AnimeNfo : http://momori.animenfo.com:8000/;?.mp3
//Radio Initial D : http://go2id.net:9001/index.html?sid=1

//id canal musica = 375842517566095360


module.exports = (client, message, args) => {   
    

    let channel = client.channels.get('375842517566095360');
            //if (message.member.voiceChannel) {
                if (channel) {
              
              channel.join()
                .then(connection => { 
                  message.reply('Eu conectei no canal com sucesso!');
                  connection.playArbitraryInput('http://go2id.net:9001/index.html?sid=1');
                  //connection.playFile('./radio/anime01.pls');
                })
                .catch(console.log);
                } /*else {
              message.reply('Você precisa estar em um canal de voz para digitar o comando!');
            }  */
            

};