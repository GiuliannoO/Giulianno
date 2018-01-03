const ytdl = require('ytdl-core');
const Discord = require('discord.js');
var servers = {};
//const streamOptions = { seek: 0, volume: 1 };


//
/*if(!servers[message.guild.id]) servers[message.guild.id] ={ //makes sure that there is a queue value for that server
    queue: []
  }
  var server = servers[message.guild.id]
  if(args[0].startsWith("http")){ //checks if its a link or not
    message.reply("Adding "+args[0]);
    server.queue.push(args[0]);
  }*/
 /* if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){ //joins the vc
    play(connection, message); 
  })*/
  //

  function play(connection, message){
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
      if(server.queue[0]) play(connection, message);
      else connection.disconnect();
      message.channel.send("O som acabou... Por favor informe outro link para continuar escutando música.")
    });
  }

//id canal musica = 375842517566095360
module.exports = (client, message, args, connection) => {  

    if(!args[0]) return message.channel.send("Por favor, informe um **link** correto."); //Makes sure that theres a name/link
    if(!message.member.voiceChannel) return message.reply("Entre em um **canal de áudio** primeiro para usar o comando."); //Makes sure it can join a voice chat with that person
    if(!servers[message.guild.id]) servers[message.guild.id] ={ //makes sure that there is a queue value for that server
      queue: []
    }
    var server = servers[message.guild.id]
    if(args[0].startsWith("http")){ //checks if its a link or not
      message.reply("Adicionando a fila "+args[0]);
      server.queue.push(args[0]);
    }
    
    //let channel = client.channels.get('375842517566095360');
    /*if ((channel) && (args[1])) 
    {  
      channel.join()
      .then(connection => 
      { */
        /*message.reply('A música no **Youtube** escolhida foi iniciada com sucesso! :musical_note:').then(msg => {
          msg.delete(60000) });
          //const stream = ytdl(`${args.join(' ')}`, { filter: 'audioonly' });
          const stream = ytdl(ytAudioQueue.first, { filter: 'audioonly' });
          const dispatcher = connection.playStream(stream);  */
          
       /*   play(connection, message);
          
      })
    .catch(console.log);
    }*/
    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){ //joins the vc
        play(connection, message); 
      })
    message.delete(60000);    
};