//"https://listen.moe/stream"


module.exports = (client, message, args) => {   
    
    

    let modRole = message.guild.roles.find("name", "Mestre");
    if(message.member.roles.has(modRole.id))
    {
        
            if (message.member.voiceChannel) {
              message.member.voiceChannel.join()
                .then(connection => { 
                  message.reply('Eu conectei no canal com sucesso!');
                  connection.playArbitraryInput('https://listen.moe/stream');
                })
                .catch(console.log);
            } else {
              message.reply('Você precisa estar em um canal de voz para digitar o comando!');
            }    
            
    }
    else
    { 
        message.reply("Você não tem poder para usar este comando!");   
    }

            


};