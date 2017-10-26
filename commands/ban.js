module.exports = (client, message, args) => {
    
    /*if(command === "ban") {
         if(!message.member.roles.some(r=>["Mestre"].includes(r.name)) )
          return message.reply("Você não tem permissão para usar este comando.");
        
        let member = message.mentions.members.first();
        if(!member)
          return message.reply("Por favor digite um nome válido.");
        if(!member.bannable) 
          return message.reply("Eu não posso banir este usuário.");
    
        let reason = args.slice(1).join(' ');
        if(!reason)
          return message.reply("Por favor informe o motivo do ban.");
        
        await member.ban(reason)
          .catch(error => message.reply(`Desculpe ${message.author} Eu não posso banir : Causa = ${error}`));
        message.reply(`${member.user.tag} foi banido pory ${message.author.tag} Motivo = ${reason}`);
      }*/


      //

          let modRole = message.guild.roles.find("name", "Mestre");
          if (!message.member.roles.has(modRole.id))
          {
              return message.reply("Você não tem poder para usar este comando!").catch(console.error);
          }
  
  
          //digite um nome para banir
          if(message.mentions.users.size < 1)
          {
              return message.reply("Digite um nome correto para banir.").catch(console.error);
          }
          let banir = message.guild.member(message.mentions.users.first());
  
  
          //digite um nome correto para banir
          if(!banir)
          {
              return message.reply("O usuário digitado não existe.");
          }
  
  
          //caso o bot não conseguir banir
          if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS"))
          {   
              return message.reply("Eu não tenho permissão para banir este usuário.").catch(console.error);
          }
  
  
          //banido com sucesso
          banir.ban().then(member =>
          {
              message.reply('${member.user.username} foi banido do servidor com sucesso.').catch(console.error);
          }).catch(console.error)
      

  };