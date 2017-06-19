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
bot.on("guildCreate", guild =>
{   
    console.log('Nova usuario : ${guild.name}, Adicionado por ${guild.owner.user.username}');   
});








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

    if (message.content.startsWith(prefix + "ping"))
    {
        message.channel.sendMessage('pong!');
    }

    

}); //fim para prefixo commando
/****************************************************************/








client.login(process.env.BOT_TOKEN)