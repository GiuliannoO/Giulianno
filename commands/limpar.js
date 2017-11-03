module.exports = (client, message, args) => {
    
       let messagecount = parseInt(args.join(' '));
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)); 
        message.delete();


    /*if(command === "limpar")
    {//inicio
        //let modRole = message.guild.roles.find("name", "Mestre");
        //if(message.member.roles.has(modRole.id))
        //{//inicio if
            let messagecount = parseInt(args.join(' '));
            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)); 
        //}//fim if
        //else
        //{//inicio else
            //message.reply("Você não tem poder para usar este comando! ");
        //}//fim else
    }//fim*/
    

  };