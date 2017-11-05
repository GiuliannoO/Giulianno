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
        title: `Informações do usuário`,
        url: "http://google.com",
        description: "This is a test embed to showcase what they look like and what they can do.",
        fields: [{
            name: `Nome: ${message.author.tag}`,
            value: "They can have different fields with small headlines."
        }/*,
          {
            name: "Masked links",
            value: "You can put [masked links](http://google.com) inside of rich embeds."
          }*/
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL ,
          text: "© Example"
        }
      }
    });

};