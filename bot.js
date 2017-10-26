const Discord = require('discord.js');
const client = new Discord.Client();
client.config = require('./config.json');
client.log = require('./functions/log.js');


client.commands = new Discord.Collection();


client.commands.set('ping', require('./commands/ping.js'));
client.commands.set('falar', require('./commands/falar.js'));
client.commands.set('sinfo', require('./commands/serverinfo.js')); EM TESTE
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
client.commands.set('resp', require('./commands/resp.js'));


//


client.on('message', message => require('./events/message.js')(client, message));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
client.on('ready', () => require('./events/ready.js')(client));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));
client.on('messageReactionAdd', (reaction, user) => require('./events/messageReactionAdd.js')(client, reaction, user));



//bot.login(config.token)
client.login(process.env.BOT_TOKEN);