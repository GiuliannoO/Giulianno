const Discord = require('discord.js');
const bot = new Discord.Client();








/******************************************************************
 * 
 *  bot online CONSOLE
 * 
 * ***************************************************************/
bot.on('ready', () =>
{   
    console.log('A sua Escrava esta pronta!');  
});








/******************************************************************
 * 
 *  novo usuario - bem vindo CANAL
 * 
 * ***************************************************************/
bot.on("guildMemberAdd", member =>
{
    let guild = member.guild;
    guild.defaultChannel.sendMessage('Ola!, ${member.user}. Eu serei a sua escrava! Seja bem vindo(a)! :heartpulse:');
});








/******************************************************************
 * 
 *  novo usuario - CONSOLE
 * 
 * ***************************************************************/ 
/*bot.on("guildCreate", guild =>
{   
    console.log('Nova usuario : ${guild.name}, Adicionado por ${guild.owner.user.username}');   
});*/








/******************************************************************
 * 
 *  enviar msg - commando " ! "
 * 
 * ***************************************************************/
const prefix = "!";
//inicio commando
bot.on('message', message =>
{ //inicio para prefixo comando
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);


    /******************************************************************
     * 
     *  calculos
     * 
     * ***************************************************************/ 
    //somar
    /*if(command === "soma") { let numArray = args.map(n=> parseInt(n)); let total = numArray.reduce( (p,c) => p+c);  message.channel.sendMessage(total); }
    //subtrair
    if(command === "sub") { let numArray = args.map(n=> parseInt(n));  let total = numArray.reduce( (p,c) => p-c);  message.channel.sendMessage(total); }
    //multiplicar
    if(command === "mult") { let numArray = args.map(n=> parseInt(n)); let total = numArray.reduce( (p,c) => p*c); message.channel.sendMessage(total);  }*/


    /******************************************************************
     * 
     *  fazer o bot falar - !falar
     * 
     * ***************************************************************/
    //Faz o bot dizer alguma coisa
    if(command === "falar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {   
            message.channel.sendMessage(args.join(" "));    
        }
        else
        {   
            message.reply("Você não tem poder para usar este comando! Morra :heartpulse:");   
        }
    }


    /******************************************************************
     * 
     *  ping
     * 
     * ***************************************************************/
    //ping
    if(command === "ping")
    {   
        message.channel.sendMessage(`**Pong!** \`${Date.now() - message.createdTimestamp } ms\``);  
    }


    /******************************************************************
     * 
     *  roll
     * 
     * ***************************************************************/
    //roll
    if(command === "roll") 
    {
        var roll = Math.floor(Math.random() * 1000) + 1;
        message.reply("Você tirou " + roll);
    }    


    /******************************************************************
     * 
     *  purge - limpar tela
     * 
     * ***************************************************************/
    //purge - deleta msg do servidor - escolhe quantas msg
    if(command === "limpar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            let messagecount = parseInt(args.join(' '));
            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)); 
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :heartpulse:");
        }
    }


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
    if(command === "sfalar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            bot.channels.get('167715230082662401').sendMessage(args.join(" "));
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :heartpulse:");
        }
    }  

    //msg sala #eventos id - 269005594462126080 -------------------------------
    if(command === "efalar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            bot.channels.get('269005594462126080').sendMessage(args.join(" "));
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :heartpulse:");
        }
    }

    //msg sala #restrito id 269010915456843777 -------------------------------
    if(command === "rfalar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            bot.channels.get('269010915456843777').sendMessage(args.join(" "));
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :heartpulse:");
        }
    }

    //msg sala #admin id 269009554308726784 -------------------------------
    if(command === "afalar")
    {
        let modRole = message.guild.roles.find("name", "Mestre");
        if(message.member.roles.has(modRole.id))
        {
            bot.channels.get('269009554308726784').sendMessage(args.join(" "));
        }
        else
        {
            message.reply("Você não tem poder para usar este comando! Morra :heartpulse:");
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
            message.reply("Você não tem poder para usar este comando! Morra :heartpulse:");
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
        message.channel.sendMessage("Comandos para mandar em mim: :heartpulse:\n"+
                                    "**!ajuda** - Todos os comandos\n"+
                                    "**!ping** - O seu ping\n"+
                                    "**!roll** - Um valor random entre 1 a 1000\n"+
                                    "**!salvar texto** - Salvar coisas importantes no canal **#salvos**\n"+
                                    "O canal **#salvos** está configurado para não deletar mensagens\n"+
                                    "Use ele para salvar links ou avisos importantes\n"+
                                    
                                    "__**Comandos restritos**__\n"+
                                    "**!limpar** - Deleta as msg do servidor no canal onde foi usado\n"+
                                    "**!limpar numero** - Escolhe quantas mensagens deseja apagar\n"+
                                    "**!falar texto** - Cria comandos de fala para mim **Apenas: Mestre**\n"+
                                    "**!sfalar texto** - Cria comandos de fala para mim **Apenas: Mestre**\n"+
                                    "**!efalar texto** - Cria comandos de fala para mim **Apenas: Mestre**\n"+
                                    "**!rfalar texto** - Cria comandos de fala para mim **Apenas: Mestre**\n"+
                                    "**!afalar texto** - Cria comandos de fala para mim **Apenas: Mestre**\n"+
                                    "**!kick @nome** - Kickar usuário do servidor **Apenas: Mestre**\n"+
                                    "**!ban @nome** - Banir usuário do servidor **Apenas: Mestre**\n"+
                                    
                                    "**Sistema de webhook** - Gerenciado pelo **Mestre**\n");
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
    if(command === "escrava")
    {
        message.reply("Me chamou? Se precisar de algo use o comando !ajuda para saber como mandar em mim!");
    }


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
            return message.reply("Você não tem poder para usar este comando! Morra :heartpulse:").catch(console.error);
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
            message.reply('${member.user.username} foi kickado com sucesso. Morra :heartpulse:').catch(console.error);
        }).catch(console.error)
    }

}); //fim para prefixo commando
/****************************************************************/








client.login(process.env.BOT_TOKEN)