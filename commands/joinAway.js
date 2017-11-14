//id canal afk = 167715581150101504
module.exports = (client, message, args) => {     
    let channel = client.channels.get('167715581150101504')
    message.member.setVoiceChannel(channel)
    message.send(`O usuário ${message.author.username} agora está Away!`)    
};