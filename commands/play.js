module.exports = (client, message, args) => {   
    
/*const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Conectado!'))
    .catch(console.error);*/

    if (!memberHasManageGuild(msg.member)) return
    
        let member = msg.member
        let channelId = member.voiceState ? member.voiceState.channelID : null
        if (!channelId) {
            // fail
            c.createMessage(msg.channel.id, 'Entre em um canal primeiro!')
        } else {
            // oh dang hello
            writeGuildConfig(msg.channel.guild.id, {vc: channelId})
            joinVoice(c, msg.channel.guild.id, channelId)
            c.createMessage(msg.channel.id, '\\o/')
        }


};