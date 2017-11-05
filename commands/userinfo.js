module.exports = (client, message, args) => {  
    
    /*let member = message.mentions.members.first();
    if(!member){
      return message.reply("Por favor, informe um nome correto!");

    }else{

      //info
     
    
      } */ 

      message.channel.send({embed: {
        color: 3447003,
        author: {  name: client.user.username, icon_url: client.user.avatarURL },
        title: `Informações do usuário.`,  /*url: "http://google.com",*/ description: `${message.author.tag}`,        
        fields: [
          { name: `Nome: `, value: `${message.author.username}.` /*value: "[link](http://google.com)."*/ },
          { name: `Número do ID: `, value: `${message.author.id}` },
          { name: `Data de criação: `, value: `${message.author.createdAt}` }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL ,
          text: "© Example"
        }
      }
    });

};