const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");











/******************************************************************
 * 
 *  BoT ready
 *  Informa se o BoT realmente está online
 *  Mostra o gaming status atual do BoT
 * 
 * ***************************************************************/
bot.on('ready', () =>
{//inicio  
    bot.user.setGame('Hentai !escrava');    
    console.log('A sua Escrava esta pronta!');  
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
    guild.defaultChannel.sendMessage('Ola!, ${member.user}. Eu serei a sua escrava. Seja bem vindo(a). Se precisar de mim use o comando **!escrava** para me chamar. :revolving_hearts:');
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
            message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts:");   
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
    if(command === "limpar")
    {//inicio
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {//inicio if
            let messagecount = parseInt(args.join(' '));
            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)); 
        }//fim if
        else
        {//inicio else
            message.reply("Você não tem poder para usar este comando! Morra :heartpulse:");
        }//fim else
    }//fim











    /******************************************************************
     * 
     *  msg para outro canal
     * 
     * ***************************************************************/

    //msg sala #salvos - id 269932626482167810 -------------------------------
    if(command === "salvar")
    {
        bot.channels.get('269932626482167810').sendMessage(args.join(" "));
    }
    
    
    //msg sala #supremosos - id 167715230082662401 -------------------------------
    if(command === "supremososfalar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            bot.channels.get('167715230082662401').sendMessage(args.join(" "));
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts:");
        }
    }  

    

    //msg sala #eventos id - 269005594462126080 -------------------------------
    if(command === "eventosfalar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            bot.channels.get('269005594462126080').sendMessage(args.join(" "));
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts:");
        }
    }

    //msg sala #restrito id 269010915456843777 -------------------------------
    if(command === "restritofalar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            bot.channels.get('269010915456843777').sendMessage(args.join(" "));
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts: ");
        }
    }

    //msg sala #admin id 269009554308726784 -------------------------------
    if(command === "adminfalar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            bot.channels.get('269009554308726784').sendMessage(args.join(" "));
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts: ");
        }
    } 


    /******************************************************************
     * 
     *  banir
     * 
     * ***************************************************************/
    //ban
    if(command === "ban")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            message.channel.sendMessage("Preparando para banir..."); 
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts: ");
        }
    }


    /******************************************************************
     * 
     *  help
     * 
     * ***************************************************************/
    //help
    if(command === "ajuda")
    {
        message.channel.sendMessage("Lista de comandos para mandar em mim. :revolving_hearts: \n"+
                                    "**!ajuda** - Listar todos os comandos liberados para usuários normais.\n"+
                                    "**!ping** - Mostra o seu ping atual.\n"+
                                    "**!roll** - Rolar um dado comum de 6 lados.\n"+
                                    "**!mover @nome canal** - (Hmm o meu mestre ainda está tendo problemas com esse código hihi)\n"+
                                    "**!salvar texto** - Salvar mensagens no canal **#salvos**\n"+
                                    "**O sistema de webhook** é Gerenciado pelo **Mestre.**\n");
    }                                    


    /******************************************************************
     * 
     *  conversar com o bot - escrava
     * 
     * ***************************************************************/
    //conversar
    if(command === "morra")
    {
        message.reply("Morra você! Humn");
    }
    if ((command === "escrava") || (command === "Escrava"))
    {
        message.reply("Me chamou? Se precisar de algo use o comando !ajuda para saber como mandar em mim!");
    }


     /****/
     
    if (command === "mover")
    {
        if(message.mentions.users.size === 0)
        {
            return message.reply("Digite um nome correto para mover").catch(console.error);
        }                  
    }


    /*****/


/******************************************************************
 * 
 *  Kickar Usuario - ONLY - mestre e admin
 * 
 * ***************************************************************/    
    if(command === "kick")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        
    if (!message.member.roles.has(modRole.id))
        {
            return message.reply("Você não tem poder para usar este comando! Morra :revolving_hearts: ").catch(console.error);
        }

        if(message.mentions.users.size === 0)
        {
            return message.reply("Digite um nome correto para kickar").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember)
        {
            return message.reply("O usuário digitado não existe");
        }
        if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS"))
        {   
            return message.reply("Eu não tenho permissão para kickar").catch(console.error);
        }
        kickMember.kick().then(member =>
        {
            message.reply('${member.user.username} foi kickado com sucesso. Morra :revolving_hearts: ').catch(console.error);
        }).catch(console.error)
    }

});//fim para prefixo commando




/******************************************************************
 * 
 *  bot login e prefix ! - config.json
 * 
 * ***************************************************************/
bot.login(config.token)