module.exports = (client, message, args) => { 
        let modRole = message.guild.roles.find("name", "Sub", "@everyone");
        if(message.member.roles.has(modRole.id))
        {
            message.reply("Desculpe, mas você não tem poder para usar este comando!").then(msg => {
            msg.delete(60000)
            }); 
            message.delete();  
        }
        else
        { 
            message.guild.channels.get('167715230082662401').createInvite().then(invite =>
            message.channel.send(invite.url)).then(msg => {
            msg.delete(60000)
            }); 
            message.delete();  
        }
};