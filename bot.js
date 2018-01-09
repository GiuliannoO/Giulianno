const Discord = require('discord.js');
const client = new Discord.Client();
const weather = require('weather-js');
const sql = require("sqlite");
const palavroes = require('./profanity/palavroes.js');
const await = require('await');
const ytdl = require('ytdl-core');
//const streamOptions = { seek: 0, volume: 1 };
//const mysql = require('mysql');

var servers = {};

//----------------------------------------------------------------------------------------------------------------------------------

sql.open("./score.sqlite");

//----------------------------------------------------------------------------------------------------------------------------------

client.config = require('./config.json');
client.log = require('./functions/log.js');
client.commands = new Discord.Collection();

//---------------------------------------------------------------------------------------------------------------------------------- 

//COMANDOS
client.commands.set('ping', require('./commands/ping.js'));
client.commands.set('falar', require('./commands/falar.js'));
client.commands.set('ajuda', require('./commands/ajuda.js'));
client.commands.set('limpar', require('./commands/limpar.js'));
client.commands.set('ban', require('./commands/ban.js'));
client.commands.set('kick', require('./commands/kick.js'));
client.commands.set('unban', require('./commands/unban.js'));
client.commands.set('roll6', require('./commands/roll6.js'));
client.commands.set('bot', require('./commands/conversaBot.js'));
client.commands.set('morra', require('./commands/conversaMorra.js'));
client.commands.set('soma', require('./commands/calcularSoma.js'));
client.commands.set('sub', require('./commands/calcularSub.js'));
client.commands.set('mult', require('./commands/calcularMult.js'));
client.commands.set('div', require('./commands/calcularDiv.js'));
client.commands.set('fsalvos', require('./commands/canalSalvos.js'));
client.commands.set('feventos', require('./commands/canalEventos.js'));
client.commands.set('fprincipal', require('./commands/canalPrincipal.js'));
client.commands.set('resp', require('./commands/resp.js'));
client.commands.set('play', require('./commands/radioPlayYoutube.js'));
client.commands.set('playinitiald', require('./commands/radioPlayInitialD.js'));
client.commands.set('playmoe', require('./commands/radioPlayMoe.js'));
client.commands.set('playanimenfo', require('./commands/radioPlayAnimeNfo.js'));
client.commands.set('playhrh', require('./commands/radioHardRockHeaven.js'));
client.commands.set('playmh', require('./commands/radioMetalHardcore.js'));
client.commands.set('stop', require('./commands/radioStop.js'));
client.commands.set('userinfo', require('./commands/userinfo.js'));
client.commands.set('serverinfo', require('./commands/serverinfo.js'));
client.commands.set('tempo', require('./commands/tempo.js'));
client.commands.set('afk', require('./commands/joinAway.js'));
client.commands.set('level', require('./commands/levelXp.js'));
client.commands.set('pontos', require('./commands/levelPoints.js')); 
client.commands.set('votar', require('./commands/votar.js')); 
client.commands.set('invite', require('./commands/invite.js')); 
client.commands.set('up', require('./commands/botUpdate.js'));     
//client.commands.set('teste', require('./commands/teste.js')); 

//----------------------------------------------------------------------------------------------------------------------------------

//MENSAGEM
client.on('messageReactionAdd', (reaction, user) => require('./events/messageReactionAdd.js')(client, reaction, user));
//----------------------------------------------------------------------------------------------------------------------------------
client.on('message', message => { 
  //BANCO DE DADOS
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => 
  { if (!row) { sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
  } else {  let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
    if (curLevel > row.level) { row.level = curLevel;  sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);  message.reply(`Ding! Parabéns! Você subiu de level. O seu level atual é **${curLevel}**!`);    }
  sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);  }
  }).catch(() => { console.error;
  sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
  sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);   });  }); 
  //FILTRO DE PALAVRÃO
    if( palavroes.some(palavra => message.content.toUpperCase().includes(palavra)) ) {
  message.delete();
  message.reply(':warning: **Atenção** :warning: ... A sua mensagem foi apagada. Por favor não diga palavrões!!! Rhrumnn!!! :anger:').then(msg => {msg.delete(60000)}); }
  //MENSAGEM REQUIRE  
  require('./events/message.js')(client, message, sql) });
//----------------------------------------------------------------------------------------------------------------------------------

//READY
client.on('ready', () => { var interval = setInterval (function () { var channel = client.channels.get('377272159770247170'); channel.sendMessage(":black_square_button: Online ").then(msg => {msg.delete(600000)})}, 3600000); require('./events/ready.js')(client) }); 

//GUILD
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
client.on('guildMemberAdd', (member, message, channel) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('Olá, seja bem vindo(a) **'+member.user.username+'** ao servidor! ... **um conselho** ... Por favor, **diminuir** o volume do meu áudio! ( Click direito em mim e ajustar o volume do usuário. Obrigada )').then(msg => {msg.delete(60000)}) } );
client.on('guildMemberRemove', (member, message, channel) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('Adeus **'+member.user.username+'**!').then(msg => {msg.delete(60000)}) } );
client.on('guildMemberUpdate', (oldMember, newMember) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('Os dados do usuário **'+oldMember+'** foram **atualizados**! (Cargo | Nickname)').then(msg => {msg.delete(60000)}) } );
client.on('guildUpdate', (guild, oldGuild, newGuild) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('O servidor **'+oldGuild+'** foi **atualizado**!').then(msg => {msg.delete(60000)}) } );
client.on('guildBanAdd', (guild, user) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage(':warning: **Atenção** :warning: ... O usuário **'+user+'** foi **banido**!').then(msg => {msg.delete(60000)}) } );
client.on('guildBanRemove', (guild, user) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage(':warning: **Atenção** :warning: ... O usuário **'+user+'** foi **desbanido**!').then(msg => {msg.delete(60000)}) } );

//USER
//client.on('userNoteUpdate', (user, oldNote, newNote) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('O usuário **'+user+'** atualizou a sua **descrição** no perfil!').then(msg => {msg.delete(60000)}) } );
client.on('userUpdate', (oldUser, newUser) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('O usuário **'+oldUser+'** atualizou o seu **nome de cadastro**!').then(msg => {msg.delete(60000)}) } );

//EMOJI
client.on('emojiCreate', (emoji) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('O **Emoji** '+emoji+' foi adicionado!').then(msg => {msg.delete(60000)}) } );
client.on('emojiDelete', (emoji) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('O **Emoji** '+emoji+' foi deletado!!').then(msg => {msg.delete(60000)}) } );
client.on('emojiUpdate', (emoji, oldEmoji, newEmoji) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('O **Emoji** '+oldEmoji+' foi **atualizado**!').then(msg => {msg.delete(60000)}) } );

//ROLES
client.on('roleCreate', (role) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('O novo **Cargo** '+role+' foi adicionado!').then(msg => {msg.delete(60000)}) } );
client.on('roleDelete', (role) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('O **Cargo** '+role+' foi deletado!!').then(msg => {msg.delete(60000)}) } );
client.on('roleUpdate', (role, oldRole, newRole) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('O **Cargo** '+oldRole+' foi **atualizado**!').then(msg => {msg.delete(60000)}) } );

//CANAL
client.on('channelCreate', (channel) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('Uma nova **sala de conversa** foi **criada**!').then(msg => {msg.delete(60000)}) } );
client.on('channelDelete', (channel, guild) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('Uma **sala de conversa** foi **deletada**!').then(msg => {msg.delete(60000)}) } );
client.on('channelPinsUpdate', (channel, time) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('Uma nova mensagem foi **fixada** em **'+time+'**!').then(msg => {msg.delete(60000)}) } );
client.on('channelUpdate', (channel, oldChannel, newChannel) => { var channel = client.channels.get('167715230082662401'); channel.sendMessage('A sala de conversa **'+oldChannel+'** foi atualizada!').then(msg => {msg.delete(60000)}) } );

//----------------------------------------------------------------------------------------------------------------------------------
//-----Nao usado por causa de spam
/*client.on('voiceStateUpdate', (oldMember, newMember) => { let newUserChannel = newMember.voiceChannel; let oldUserChannel = oldMember.voiceChannel;
if(oldUserChannel === undefined && newUserChannel !== undefined) { entra no canal --- CODIGO de msg aqui } else if(newUserChannel === undefined){ sai no canal --- CODIGO de msg aqui }}); */
//----------------------------------------------------------------------------------------------------------------------------------
//-----mysql Heroku connect database
/*var con;
if(process.env.DATABASE_URL) { con = mysql.createConnection(process.env.DATABASE_URL); } */
//----------------------------------------------------------------------------------------------------------------------------------


//client.login(config.token)
client.login(process.env.BOT_TOKEN);