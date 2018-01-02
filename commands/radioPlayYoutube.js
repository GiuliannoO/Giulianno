//id canal musica = 375842517566095360
module.exports = (client, message, args, servers) => { 
    
    if(!args[1]){
        message.channel.sendMessage("Por favor, informe uma URL correta.")
    }
    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    };
    var server = servers[message.guild.id];
    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    });
};