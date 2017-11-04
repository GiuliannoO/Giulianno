module.exports = (client, message, args) => {  
    
    /*let member = message.mentions.members.first();
    if(!member){
      return message.reply("Please mention a valid member of this server");

    }else{
    
    let embed = new DynamicsCompressorNode.RichEmbed()
    
        message.reply(message.author.avatarURL);
        .setAuthor(member.user.username)
        .setDescription("Informação do usuário!")
        .setColor("#9B59B6")
        .setField("Nome", member.user.tag)
        .addField("ID", member.user.id)
        .addField("Criado em", member.user.createdAt);

        message.channel.sendEmbed(embed);

        return;  }*/


        let member = message.mentions.members.first();
    if(!member){
      return message.reply("Por favor digite um nome válido!");

    }else{
    
      
        message.reply(message.author.avatar);
        message.reply(member.user.username);
        message.reply("Informação do usuário!");
        message.reply("Nome", member.user.tag);
        message.reply("ID", member.user.id);
        message.reply("Criado em", member.user.createdAt);  

          }
            

};