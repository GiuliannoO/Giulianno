const ytdl = require('ytdl-core');
const Discord = require('discord.js');
var servers = {};
//const streamOptions = { seek: 0, volume: 1 };

//-------------------------------------------------------------------------------
//Function
  function play(connection, message){
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
    //server.dispatcher = connection.playStream(ytdl(server.queue[0]));
    server.queue.shift();
    server.dispatcher.on("end", function(){
      if(server.queue[0]) play(connection, message);
      else connection.disconnect();
      message.channel.send("A música que estava tocando acabou...").then(msg => {
        msg.delete(60000) });
    }); }
//-------------------------------------------------------------------------------

//id canal musica = 375842517566095360
module.exports = (client, message, args, connection) => {  

    if(!args[0]) return message.channel.send("Por favor, informe um **link** correto.").then(msg => { 
        msg.delete(60000) });; 

    if(!message.member.voiceChannel) return message.reply("Entre em um **canal de voz** para usar o comando.").then(msg => {
        msg.delete(60000) });; 

    if(!servers[message.guild.id]) servers[message.guild.id] ={ 
      queue: []
    }

    var server = servers[message.guild.id]

    if(args[0].startsWith("http")){ //verifica se tem http no inicio da frase
      message.reply("Adicionou uma nova música para tocar: "+args[0]).then(msg => { //add a musica na fila
        msg.delete(60000) });;
      server.queue.push(`${args.join(' ')}`); //segue a fila para frente
    }    
    
          //tocar sem sistema de queue/fila/espera
          //const stream = ytdl(`${args.join(' ')}`, { filter: 'audioonly' });
          //const dispatcher = connection.playStream(stream);

    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection)
    { //entra no canal de voz e toca a musica   
        play(connection, message); 
    })
    
    message.delete(60000);    
};