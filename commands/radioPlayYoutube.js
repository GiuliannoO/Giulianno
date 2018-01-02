//id canal musica = 375842517566095360

module.exports = (client, message, args) => { 
    let channel = client.channels.get('375842517566095360');
    //if (message.member.voiceChannel) {
    if (!servers[message.guild.id]) servers[message.guild.id] = { queue: [] }
    
    var server = servers[message.guild.id];

    if ((channel) && (args[1])) 
    {  
      channel.join()
      .then(connection => 
       { 
            message.reply('Eu conectei no canal com sucesso! Aproveite o som da rádio **anime Moe**! :musical_note:').then(msg => {
            msg.delete(60000)  });
            server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
            server.queue.push(args[1]);
            //connection.playFile('./radio/anime01.pls'); 
       })
        .catch(console.log);
    }
    else if ((channel) && (!args[1]))
    {
        message.reply('Por favor, informe corretamente uma **URL** do **Youtube** para tocar.').then(msg => {
        msg.delete(60000)  });
    } 
    /*else { message.reply('Você precisa estar em um canal de voz para digitar o comando!');  }  */
    message.delete(60000);
};