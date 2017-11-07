module.exports = (client, message, args) => {    
    //let messagecount = parseInt(args.join(' '));
    let member = message.mentions.members.first();
    if(!member)
    {
      return message.reply("Por favor, informe um nome correto!");
    }
    else
    {
     message.channel.bulkDelete(messages.user.member); 
     message.delete();
    }
};