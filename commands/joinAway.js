//id canal afk = 167715581150101504
//myUser.Edit(voiceChannel: myTargetChannel);
var member = (message.mentions.users.first())

module.exports = (client, message, args) => {   
    let channel = client.channels.get('167715581150101504');
    
    
    if (!message.mentions.users.first()) {
        message.channel.send("You have to tag someone my dude.")
        
    }
    guild.member(member).setVoiceChannel(channel)
    message.channel.send(":right_facing_fist: " + member)

    
    
};