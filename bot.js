/*const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");














bot.on('ready', () =>
{//inicio  
    //bot.user.setGame('Digite !bot');    
    //console.log('O Giu BoT esta pronto!'); 
    bot.user.setPresence({ game: { name: 'Digite !ajuda', type: 0 } });
});//fim













bot.on("guildMemberAdd", member =>
{//inicio
    let guild = member.guild;
    guild.defaultChannel.sendMessage('Ola!, ${member.user}. Eu sou o BoT do servidor. Seja bem vindo(a). Se precisar de mim use o comando **!bot** para me chamar.');
});//fim












bot.on("guildCreate", guild =>
{//inicio   
    console.log('Novo(a) usuário : ${guild.name}, foi adicionado por ${guild.owner.user.username}');    
});//fim












//inicio commando
bot.on('message', message =>
{ //inicio para prefixo comando
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);











     
    //somar
    if(command === "soma")    { let numArray = args.map(n=> parseInt(n));    let total = numArray.reduce( (p,c) => p+c);  message.channel.sendMessage(total);   }

    //subtrair
    if(command === "sub")   { let numArray = args.map(n=> parseInt(n));   let total = numArray.reduce( (p,c) => p-c);  message.channel.sendMessage(total);    }

    //multiplicar
    if(command === "mult")  { let numArray = args.map(n=> parseInt(n));  let total = numArray.reduce( (p,c) => p*c); message.channel.sendMessage(total);  }










    //bot.commands.set('falar', require('./comandos/falar.js'));
    
    //Faz o bot dizer alguma coisa
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






      











    
    //ping
    if(command === "ping")
    {//inicio
        //message.channel.sendMessage(`**Pong!** \`${Date.now() - message.createdTimestamp } ms\``);  
        message.reply(`**Pong!** \`${Date.now() - message.createdTimestamp } ms\``);
    }//fim











    
    //roll
    if(command === "roll") 
    {//inicio
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("Você tirou " + roll);
    }//fim 











    
    //purge - deleta msg do servidor
    //não use !limpar <numero> pois está meio bugado
    if(command === "limpar")
    {//inicio
        //let modRole = message.guild.roles.find("name", "Mestre");
        //if(message.member.roles.has(modRole.id))
        //{//inicio if
            let messagecount = parseInt(args.join(' '));
            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)); 
        //}//fim if
        //else
        //{//inicio else
            //message.reply("Você não tem poder para usar este comando! Morra. :heartpulse:");
        //}//fim else
    }//fim











    
    //msg sala #salvos - id 269932626482167810
    if(command === "salvar")
    {//inicio
        bot.channels.get('269932626482167810').sendMessage(args.join(" "));
    }//fim










      
    //msg sala #supremosos - id 167715230082662401 
    if(command === "supremososfalar")
    {//inicio
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {//inicio if
            bot.channels.get('167715230082662401').sendMessage(args.join(" "));
        }//fim if
        else
        {//inicio else
            message.reply("Você não tem poder para usar este comando!");
        }//fim else
    }//fim










    
    //msg sala #random - id 326555780713283594 
    if(command === "randomfalar")
    {//inicio
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {//inicio if
            bot.channels.get('326555780713283594').sendMessage(args.join(" "));
        }//fim if
        else
        {//inicio else
            message.reply("Você não tem poder para usar este comando!");
        }//fim else
    }//fim










    
    //msg sala #eventos id - 269005594462126080 
    if(command === "eventosfalar")
    {//inicio
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {//inicio if
            bot.channels.get('269005594462126080').sendMessage(args.join(" "));
        }//fim if
        else
        {//inicio else
            message.reply("Você não tem poder para usar este comando!");
        }//fim else
    }//fim










    
    //msg sala #restrito id 269010915456843777 
    if(command === "restritofalar")
    {//inicio
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {//inicio if
            bot.channels.get('269010915456843777').sendMessage(args.join(" "));
        }//fim if
        else
        {//inicio else
            message.reply("Você não tem poder para usar este comando!");
        }//fim else
    }//fim










    
    //msg sala #admin id 269009554308726784 
    if(command === "adminfalar")
    {//inicio
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {//inicio if
            bot.channels.get('269009554308726784').sendMessage(args.join(" "));
        }//fim if
        else
        {//inicio else
            message.reply("Você não tem poder para usar este comando!");
        }//fim else
    }//fim











    
    if(command === "ban")
    {//inicio
        //mod
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
    }//fim










    
    if(command === "unban")
    {//inicio
        //mod
        let modRole = message.guild.roles.find("name", "Mestre");
        if (!message.member.roles.has(modRole.id))
        {
            return message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts: ").catch(console.error);
        }


        //digite um nome para desbanir
        if(!user)
        {
            return message.reply("Digite o número do **id** do usuário que deseja desbanir.").catch(console.error);
        }

        //desbanido com sucesso
        message.guild.unban(user);        
    }//fim











    
    //help
    if(command === "ajuda")
    {//inicio
        message.channel.sendMessage("Lista de comandos para usar. \n"+
                                    "**!ajuda** - Listar todos os comandos liberados para usuários normais.\n"+
                                    "**!limpar** - Deleta __**permanentemente**__ todas as msg do canal atual.\n"+
                                    "*( Nao abuse deste comando! Ele deleta as msg para todo mundo. )*\n"+
                                    "**salvar msgs ou links importantes** - Use o canal de chat **#salvos**.\n"+
                                    "*( O canal **salvos** está configurado para não deletar msgs. )*\n"+
                                    "**!ping** - Mostra o seu ping atual.\n"+
                                    "**!roll** - Rolar um dado comum de 6 lados.\n"+
                                    "**Mover outros usuários de canal** - Clique, segure e arraste o alvo desejado.\n"+                                    
                                    "**O sistema de webhook** é Gerenciado pelo **Mestre.**\n");
    }//fim                                    











   
    //conversar
    if(command === "morra")
    {//inicio
        message.reply("Morra você! Humn!");
    }//fim

    if ((command === "bot") || (command === "Bot"))
    {//inicio
        message.reply("Me chamou? Se precisar de algo use o comando **!ajuda**!");
    }//fim











     
    if (command === "mover")
    {
        if(message.mentions.users.size < 1)
        {
            return message.reply("Digite um nome para mover.").catch(console.error);
        }                  
    }






    if(command === "kick") {
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

  }





  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
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
  }











   
    if(command === "kick")
    {//inicio
        //mod
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
    }//fim



});//fim para prefixo commando*/










const Discord = require('discord.js');

const client = new Discord.Client();
client.config = require('./config.json');

client.log = require('./functions/log.js');







client.commands = new Discord.Collection();





client.commands.set('ping', require('./commands/ping.js'));
client.commands.set('falar', require('./commands/falar.js'));
//client.commands.set('sinfo', require('./commands/serverinfo.js')); EM TESTES
client.commands.set('ajuda', require('./commands/ajuda.js'));
client.commands.set('limpar', require('./commands/limpar.js'));



client.on('message', message => require('./events/message.js')(client, message));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
client.on('ready', () => require('./events/ready.js')(client));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));
client.on('messageReactionAdd', (reaction, user) => require('./events/messageReactionAdd.js')(client, reaction, user));




//bot.login(config.token)
client.login(process.env.BOT_TOKEN);