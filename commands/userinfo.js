module.exports = (client, message, args) => {  
    
    /*let member = message.mentions.members.first();
    if(!member){
      return message.reply("Por favor, informe um nome correto!");

    }else{

      //info
     
    
      } */ 

      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: `Informações do usuário ${message.author.tag}.`,
        //url: "http://google.com",
        description: "Informações do usuário ${message.author.tag}.",
        fields: [{
            name: `Nome: ${message.author.username}.`//,
            //value: "They can have different fields with small headlines."
        },
          {
            name: `ID: ${message.author.id}.`//,
            //value: "You can put [masked links](http://google.com) inside of rich embeds."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL ,
          text: "© Example"
        }
      }
    });

};