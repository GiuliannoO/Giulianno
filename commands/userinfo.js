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
        description: "Informações do usuário.",
        fields: [{
            name: `Nome: ${message.author.username}.` + `auheuaea`,
            value: "asdf "
        },
          {
            name: `ID: ${message.author.id}.`,
            value: "asdf "
            //value: "[link](http://google.com)."
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