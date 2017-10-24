/*const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");















    
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





















   
   















   
    



});//fim para prefixo commando*/










const Discord = require('discord.js');

const client = new Discord.Client();
client.config = require('./config.json');

client.log = require('./functions/log.js');







client.commands = new Discord.Collection();





client.commands.set('ping', require('./commands/ping.js'));
client.commands.set('falar', require('./commands/falar.js'));
//client.commands.set('sinfo', require('./commands/serverinfo.js')); EM TESTE
client.commands.set('ajuda', require('./commands/ajuda.js'));
client.commands.set('limpar', require('./commands/limpar.js'));
client.commands.set('ban', require('./commands/ban.js'));
client.commands.set('kick', require('./commands/kick.js'));
client.commands.set('unban', require('./commands/unban.js'));
client.commands.set('roll', require('./commands/roll.js'));
client.commands.set('bot', require('./commands/conversaBot.js'));
client.commands.set('morra', require('./commands/conversaMorra.js'));
client.commands.set('soma', require('./commands/calcularSoma.js'));
client.commands.set('sub', require('./commands/calcularSub.js'));
client.commands.set('mult', require('./commands/calcularMult.js'));
client.commands.set('div', require('./commands/calcularDiv.js'));


//


client.on('message', message => require('./events/message.js')(client, message));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
client.on('ready', () => require('./events/ready.js')(client));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));
client.on('messageReactionAdd', (reaction, user) => require('./events/messageReactionAdd.js')(client, reaction, user));




//bot.login(config.token)
client.login(process.env.BOT_TOKEN);