module.exports = (client, message, args) => {  
    
    let member = message.mentions.members.first();
    if(!member){
      return message.reply("Please mention a valid member of this server");

    }else{
    
    let embed = new DynamicsCompressorNode.RichEmbed()
        .setAuthor(member.user.username)
        .setDescription("Informação do usuário!")
        .setColor("#9B59B6")
        .addField("Nome", `${member.user.username}#${member.user.discriminator}`)
        .addField("ID", member.user.id)
        .addField("Criado em", member.user.createdAt);

        message.channel.sendEmbed(embed);

        return;  }
            

};