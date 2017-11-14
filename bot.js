const Discord = require('discord.js');
const client = new Discord.Client();
const weather = require('weather-js');
//const mysql = require('mysql');

//

client.config = require('./config.json');
client.log = require('./functions/log.js');

//

client.commands = new Discord.Collection();

//

client.commands.set('ping', require('./commands/ping.js'));
client.commands.set('falar', require('./commands/falar.js'));
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
client.commands.set('fsalvos', require('./commands/canalSalvos.js'));
client.commands.set('fprincipal', require('./commands/canalPrincipal.js'));
client.commands.set('resp', require('./commands/resp.js'));
client.commands.set('playinitiald', require('./commands/radioPlayInitialD.js'));
client.commands.set('playmoe', require('./commands/radioPlayMoe.js'));
client.commands.set('playanimenfo', require('./commands/radioPlayAnimeNfo.js'));
client.commands.set('stop', require('./commands/radioStop.js'));
client.commands.set('userinfo', require('./commands/userinfo.js'));
client.commands.set('serverinfo', require('./commands/serverinfo.js'));
client.commands.set('tempo', require('./commands/tempo.js'));
client.commands.set('afk', require('./commands/joinAway.js'));
client.commands.set('xp', require('./commands/xp.js'));

//

//mysql Heroku connect database
//var con;
//if(process.env.DATABASE_URL) { con = mysql.createConnection(process.env.DATABASE_URL); }

//

client.on('message', message => require('./events/message.js')(client, message));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
client.on('ready', () => { var channel = client.channels.get('167715230082662401'); channel.sendMessage("**O BoT está online!**").then(msg => {msg.delete(60000)}); require('./events/ready.js')(client) }); 
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));
client.on('messageReactionAdd', (reaction, user) => require('./events/messageReactionAdd.js')(client, reaction, user));

//

/*client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel  
    if(oldUserChannel === undefined && newUserChannel !== undefined) {
       // usuario entra no canal BOT manda MSG
    } else if(newUserChannel === undefined){
      // usuario sai no canal BOT manda MSG
    }});*/

//

//Heroku connect token
//bot.login(config.token)
client.login(process.env.BOT_TOKEN);