module.exports = (client, message, args) => {
    
    /*if(command === "kick") {
        // This command must be limited to mods and admins. In this example we just hardcode the role names.
        // Please read on Array.some() to understand this bit: 
        if(!message.member.roles.some(r=>["Mestre", "Admin"].includes(r.name)) )
          return message.reply("Você não ter permissão para usar este comando!");
        
        // Let's first check if we have a member and if we can kick them!
        // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
        let member = message.mentions.members.first();
        if(!member)
          return message.reply("Por favor digite um nome válido.");
        if(!member.kickable) 
          return message.reply("Eu não posso kickar este usuário.");
        
        // slice(1) removes the first part, which here should be the user mention!
        let reason = args.slice(1).join(' ');
        if(!reason)
          return message.reply("Por favor informe o motivo do kick.");
        
        // Now, time for a swift kick in the nuts!
        await member.kick(reason)
          .catch(error => message.reply(`Desculpe ${message.author} Eu não posso kickar : Causa = ${error}`));
        message.reply(`${member.user.tag} foi kickado por ${message.author.tag} Motivo = ${reason}`);
    
      }*/




      //


          let modRole = message.guild.roles.find("name", "Mestre");
          if (!message.member.roles.has(modRole.id))
          {
              return message.reply("Você não tem poder para usar este comando! ").catch(console.error);
          }
  
  
          //digite um nome para kickar
          if(message.mentions.users.size < 1)
          {
              return message.reply("Digite um nome correto para kickar.").catch(console.error);
          }
          let kickMember = message.guild.member(message.mentions.users.first());
  
  
          //digite um nome correto para kickar
          if(!kickMember)
          {
              return message.reply("O usuário digitado não existe.");
          }
  
  
          //caso o bot não conseguir kickar
          if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS"))
          {   
              return message.reply("Eu não tenho permissão para kickar este usuário.").catch(console.error);
          }
  
            //kickado com sucesso
          kickMember.kick().then(member =>
          {
              message.reply('${member.user.username} foi kickado do servidor com sucesso. ').catch(console.error);
          }).catch(console.error)
      


  };