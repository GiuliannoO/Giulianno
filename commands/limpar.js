module.exports = (client, message, args) => {
    
       let messagecount = parseInt(args.join(' '));
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)); 
    //}
    //else
    //{
        //message.reply("Você não tem poder para usar este comando! Morra. :heartpulse:");
    //}

  };