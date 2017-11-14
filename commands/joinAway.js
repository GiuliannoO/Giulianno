//id canal afk = 167715581150101504

module.exports = (client, message, args) => { 
    
    //const channel = message.guild.channels.find('name', 'voicechannel')
    let channel = client.channels.get('167715581150101504')
    message.member.setVoiceChannel(channel)

        
};