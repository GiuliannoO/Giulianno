//id canal afk = 167715581150101504
module.exports = (client, message, args) => {     
    let channel = client.channels.get('167715581150101504');
    if (channel){
    message.member.setVoiceChannel(channel);
    //+message.author.username+
    //message.channel.send(`O usuário @${message.author.username} agora está Away!`).then(msg => {
        message.channel.send('O usuário **'+message.member.nickname+'** agora está Away! :zzz:').then(msg => {
        msg.delete(60000)
      });
    }
    message.delete(60000);      
};