module.exports = (client, message, args) => {

         let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            message.channel.sendMessage(args.join(" "));    
        }
        else
        { 
            message.reply("Você não tem poder para usar este comando!");   
        }
    


};