if(command === "falar")
{//inicio
    let modRole = message.guild.roles.find("name", "Mestre");
    if(message.member.roles.has(modRole.id))
    {//inicio if 
        message.channel.sendMessage(args.join(" "));    
    }//fim if
    else
    {//inicio else  
        message.reply("Você não tem poder para usar este comando!");   
    }//fim else
}//fim