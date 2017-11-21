//id canal afk = 167715581150101504
module.exports = (client, message, args) => {     
    let channel = client.channels.get('167715581150101504');
    if (channel){
    message.member.setVoiceChannel(channel);
    //+message.author.username+ Nome de cadastro
    //+message.member.nickname+ Nick name
    //message.channel.send(`O usuário @${message.author.username} agora está Away!`).then(msg => {
        if ((message.member.nickname) !== null){ //se o usuario tiver apelido = usa o apelido
        message.channel.send('O usuário **'+message.member.nickname+'** agora está Away! :zzz:').then(msg => {
        msg.delete(60000) });
        }
        else if ((message.member.nickname) === null){ //se o usuario nao tiver nenhum apelido = usa o nome cadastrado
        message.channel.send('O usuário **'+message.author.username+'** agora está Away! :zzz:').then(msg => {
        msg.delete(60000) });
        }
    }
    message.delete(60000);      
};