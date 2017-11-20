module.exports = (client, message, args) => { 
    let channel = client.channels.get('375842517566095360');
    //if (message.member.voiceChannel) {
    if (channel) 
    {
        channel.leave();
        message.reply(':mute: A rádio foi **desligada**! Para ligar novamente selecione uma rádio!').then(msg => {
            msg.delete(60000)
          });
    } 
    /*else { message.reply('Você precisa estar em um canal de voz para digitar o comando!');  }  */
    message.delete(60000);
};