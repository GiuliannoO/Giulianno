module.exports = (client, message, args) => {  
    
    let member = message.mentions.members.first();
    if(!member){
      return message.reply("Please mention a valid member of this server");

    }else{
    
    //let embed = new DynamicsCompressorNode.RichEmbed()
    let embed = new Discord.RichEmbed()
    
        //message.reply(message.author.avatarURL);
        message.channel.send(message.author.username)
        message.channel.send("Informação do usuário!")
        .setColor("#9B59B6")
        message.channel.send("Nome", member.user.tag)
        message.channel.send("ID", member.user.id)
        message.channel.send("Criado em", member.user.createdAt);

        //message.channel.sendEmbed(embed);
        message.channel.send({embed});

        //return;  
      }

};