//id canal musica = 375842517566095360
module.exports = (client, message, args) => {   
    let channel = client.channels.get('375842517566095360');
    //if (message.member.voiceChannel) {
    if (channel) 
    {              
      channel.join()
      .then(connection => 
      { 
        message.reply('Eu conectei no canal com sucesso! Aproveite o som da rádio **AnimeNfo**!');
        connection.playArbitraryInput('http://momori.animenfo.com:8000/;?.mp3');
        //connection.playFile('./radio/anime01.pls');
      })
    .catch(console.log);
    } 
    /*else { message.reply('Você precisa estar em um canal de voz para digitar o comando!');  }  */
};