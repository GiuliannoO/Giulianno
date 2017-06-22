const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");






;;




/******************************************************************
 * 
 *  BoT ready
 *  Informa se o BoT realmente está online
 *  Mostra o gaming status atual do BoT
 * 
 * ***************************************************************/
bot.on('ready', () =>
{//inicio  
    bot.user.setGame('Digite !maid ');    
    console.log('A sua Maid esta pronta!');  
});//fim











/******************************************************************
 * 
 *  Novo usuario adicionado
 *  Manda mensagem de boas vindas no chat para o novo usuario
 * 
 * ***************************************************************/
bot.on("guildMemberAdd", member =>
{//inicio
    let guild = member.guild;
    guild.defaultChannel.sendMessage('Ola!, ${member.user}. Eu serei a sua Maid. Seja bem vindo(a). Se precisar de mim use o comando **!maid** para me chamar. :revolving_hearts:');
});//fim











/******************************************************************
 * 
 *  Novo usuario adicionado
 *  Log informativo no console
 * 
 * ***************************************************************/ 
bot.on("guildCreate", guild =>
{//inicio   
    console.log('Novo(a) usuário : ${guild.name}, foi adicionado por ${guild.owner.user.username}');    
});//fim











/******************************************************************
 * 
 *  Comando
 *  Prefixo = !
 *  Usado para enviar os comandos para o BoT
 * 
 * ***************************************************************/ 
//inicio commando
bot.on('message', message =>
{ //inicio para prefixo comando
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);











    /******************************************************************
     * 
     *  Calculos matemáticos
     *  Somar, Subtrair, Multiplicar, Dividr
     *  Qualquer um pode usar
     * 
     * ***************************************************************/ 
    //somar
    /*if(command === "soma")    { let numArray = args.map(n=> parseInt(n));    let total = numArray.reduce( (p,c) => p+c);  message.channel.sendMessage(total);   }

    //subtrair
    if(command === "sub")   { let numArray = args.map(n=> parseInt(n));   let total = numArray.reduce( (p,c) => p-c);  message.channel.sendMessage(total);    }

    //multiplicar
    if(command === "mult")  { let numArray = args.map(n=> parseInt(n));  let total = numArray.reduce( (p,c) => p*c); message.channel.sendMessage(total);  }*/











    /******************************************************************
     * 
     *  Comando Falar
     *  Usado para enviar mensagens em nome do BoT
     *  Apenas o Mestre pode usa-lo
     * 
     * ***************************************************************/
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
            message.reply("Você não tem poder para usar este comando! Morra. :revolving_hearts:");   
        }//fim else
    }//fim











    /******************************************************************
     * 
     *  Comando Ping
     *  Usado para mostrar o ping atual no servidor
     *  Qualquer um pode usar
     * 
     * ***************************************************************/
    //ping
    if(command === "ping")
    {//inicio
        message.channel.sendMessage(`**Pong!** \`${Date.now() - message.createdTimestamp } ms\``);  
    }//fim











    /******************************************************************
     * 
     *  Comando Roll
     *  Usado para rolar um dado comum de 6 lados
     *  e obter um valor random entre esses números
     *  Qualquer um pode usar
     * 
     * ***************************************************************/
    //roll
    if(command === "roll") 
    {//inicio
        var roll = Math.floor(Math.random() * 6) + 1;
        message.reply("Você tirou " + roll);
    }//fim 











    /******************************************************************
     * 
     *  Comando Limpar / Purge / Clear
     *  Usado para limpar / apagar tudo que existe na tela
     *  Apenas o mestre pode usar
     * 
     * ***************************************************************/
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











    /******************************************************************
     * 
     *  Comando Salvar
     *  Usado para enviar mensagens em nome do BoT para o canal #salvos
     *  Qualquer um pode usar
     *  id do canal : id 269932626482167810
     * 
     * ***************************************************************/
    //msg sala #salvos - id 269932626482167810
    if(command === "salvar")
    {//inicio
        bot.channels.get('269932626482167810').sendMessage(args.join(" "));
    }//fim










    /******************************************************************
     * 
     *  Comando Supremososfalar
     *  Usado para enviar mensagens em nome do BoT para o canal #supremosos
     *  Apenas o mestre pode usar
     *  id do canal : id 167715230082662401
     * 
     * ***************************************************************/  
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
            message.reply("Você não tem poder para usar este comando! Morra. :revolving_hearts:");
        }//fim else
    }//fim










    /******************************************************************
     * 
     *  Comando Randomfalar
     *  Usado para enviar mensagens em nome do BoT para o canal #random
     *  Apenas o mestre pode usar
     *  id do canal : id 326555780713283594
     * 
     * ***************************************************************/  
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
            message.reply("Você não tem poder para usar este comando! Morra. :revolving_hearts:");
        }//fim else
    }//fim










    /******************************************************************
     * 
     *  Comando Eventosfalar
     *  Usado para enviar mensagens em nome do BoT para o canal #eventos
     *  Apenas o mestre pode usar
     *  id do canal : id 269005594462126080
     * 
     * ***************************************************************/
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
            message.reply("Você não tem poder para usar este comando! Morra. :revolving_hearts:");
        }//fim else
    }//fim










    /******************************************************************
     * 
     *  Comando Restritofalar
     *  Usado para enviar mensagens em nome do BoT para o canal #restrito
     *  Apenas o mestre pode usar
     *  id do canal : id 269010915456843777
     * 
     * ***************************************************************/
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
            message.reply("Você não tem poder para usar este comando! Morra. :revolving_hearts: ");
        }//fim else
    }//fim










    /******************************************************************
     * 
     *  Comando Adminfalar
     *  Usado para enviar mensagens em nome do BoT para o canal #admin
     *  Apenas o mestre pode usar
     *  id do canal : id 269009554308726784
     * 
     * ***************************************************************/
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
            message.reply("Você não tem poder para usar este comando! Morra. :revolving_hearts: ");
        }//fim else
    }//fim











    /******************************************************************
     * 
     *  Comando Ban
     *  Usado para banir usuário do canal
     *  Apenas o mestre pode usar
     * 
     * ***************************************************************/
    if(command === "ban")
    {//inicio
        //mod
        let modRole = message.guild.roles.find("name", "Mestre");
        if (!message.member.roles.has(modRole.id))
        {
            return message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts: ").catch(console.error);
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
            message.reply('${member.user.username} foi banido do servidor com sucesso. Morra. :revolving_hearts: ').catch(console.error);
        }).catch(console.error)
    }//fim










    /******************************************************************
     * 
     *  Comando unBan
     *  Usado para desbanir usuário do canal
     *  Apenas o mestre pode usar
     * 
     * ***************************************************************/
    /*if(command === "unban")
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
    }//fim*/











    /******************************************************************
     * 
     *  Comando Ajuda
     *  Usado para listar todos os comandos do servidor
     *  Qualquer um pode usar
     * 
     * ***************************************************************/
    //help
    if(command === "ajuda")
    {//inicio
        message.channel.sendMessage("Lista de comandos para usar. :revolving_hearts: \n"+
                                    "**!ajuda** - Listar todos os comandos liberados para usuários normais.\n"+
                                    "**!limpar** - Deleta __**permanentemente**__ todas as msg do canal atual.\n"+
                                    "**!salvar texto** - Salvar mensagens ou links importantes no canal **#salvos**.\n"+
                                    "**!ping** - Mostra o seu ping atual.\n"+
                                    "**!roll** - Rolar um dado comum de 6 lados.\n"+
                                    "**!mover @nome canal** - (Hmm o meu mestre ainda está tendo problemas com esse código hihi).\n"+                                    
                                    "**O sistema de webhook** é Gerenciado pelo **Mestre.**\n");
    }//fim                                    











    /******************************************************************
     * 
     *  Comando conversar com o BoT
     *  Ainda em testes
     * 
     * ***************************************************************/
    //conversar
    if(command === "morra")
    {//inicio
        message.reply("Morra você! Humn!");
    }//fim

    if ((command === "maid") || (command === "Maid"))
    {//inicio
        message.reply("Me chamou? Se precisar de algo use o comando !ajuda! :revolving_hearts:");
    }//fim











     /******************************************************************
     * 
     *  Comando Mover
     *  Usado para mover um usuário para outro canal
     *  Ainda em testes
     * 
     * ***************************************************************/
    if (command === "mover")
    {
        if(message.mentions.users.size < 1)
        {
            return message.reply("Digite um nome para mover.").catch(console.error);
        }                  
    }











/******************************************************************
 * 
 *  Comando Kick
 *  Usado para kickar um usuário do canal
 *  Apenas o mestre pode usar
 * 
 * ***************************************************************/    
    if(command === "kick")
    {//inicio
        //mod
        let modRole = message.guild.roles.find("name", "Mestre");
        if (!message.member.roles.has(modRole.id))
        {
            return message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts: ").catch(console.error);
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
            message.reply('${member.user.username} foi kickado do servidor com sucesso. Morra :revolving_hearts: ').catch(console.error);
        }).catch(console.error)
    }//fim
});//fim para prefixo commando











/******************************************************************
 * 
 *  BoT login e prefix !
 * 
 * ***************************************************************/
bot.login(config.token)