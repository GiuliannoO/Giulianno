//id canal afk = 167715581150101504
//myUser.Edit(voiceChannel: myTargetChannel);
module.exports = (client, message, args) => {   
    let channel = client.channels.get('167715581150101504');
    
    
    guild.setVoiceChannel(channel)
    message.channel.send(`O usuário ${message.author.username} está Away!`)
    
    
    
};