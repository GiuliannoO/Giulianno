module.exports = (client, message, args) => {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            message.channel.sendMessage(args.join(" ")).then(msg => {
                msg.delete(60000)
              });
            message.delete();  
        }
        else
        { 
            message.reply("Você não tem poder para usar este comando!").then(msg => {
                msg.delete(60000)
              });   
        }
};