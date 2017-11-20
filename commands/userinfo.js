module.exports = (client, message, args) => 
{  
  let member = message.mentions.members.first();
  if(!member)
  {
    return message.reply("Por favor, informe um nome correto!");
  }
  else
  {
    //member.user. (com busca)
    //message.author. (sem busca)
    //client.user. (bot info)
    //message.channel.server.detailsOf(message.author).nick
    //member.user.tag
    message.channel.send({embed:{
          color: 3447003,
          author: {  name: member.user.username, icon_url: member.user.avatarURL },
          title: `Informações do usuário.`,  /*url: "http://google.com",*/ description: `${message.guild.user.nickname}`,
          fields: 
          [
            { name: `Nome cadastrado: `, value: `${member.user.username}` /*value: "[link](http://google.com)."*/ },
            { name: `Número do ID: `, value: `${member.user.id}` },
            { name: `Data de criação: `, value: `${member.user.createdAt}` }
          ],
          timestamp: new Date(), footer: { icon_url: client.user.avatarURL , text: "© Verificado em" }
      }
    }).then(msg => {
      msg.delete(60000)
    });
  }
  message.delete(60000);
};