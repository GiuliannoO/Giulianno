module.exports = (client, message, args) => 
{  
  let member = message.mentions.members.first();
  if(!member)
  {
    return message.reply("Por favor, informe um nome correto!");
  }
  else if ((member) && ((member.nickname) !== null))
  {
    //member.user. (com busca)
    //message.author. (sem busca)
    //client.user. (bot info)
    //member.user.tag
    message.channel.send({embed:{
          color: 3447003,
          author: {  name: member.nickname, icon_url: member.user.avatarURL },
          title: `Informações do usuário`,  /*url: "http://google.com",*/ description: `${member.user.tag}`,
          fields: 
          [
            { name: `Apelido: `, value: `${member.nickname}` /*value: "[link](http://google.com)."*/ , "inline": true},
            { name: `Nome cadastrado: `, value: `${member.user.username}`, "inline": true },
            { name: `Número do ID: `, value: `${member.user.id}`, "inline": true },
            { name: `BoT?: `, value: `${member.user.bot}`, "inline": true },
            { name: `Data de criação: `, value: `${member.user.createdAt}` }
          ],
          timestamp: new Date(), footer: { icon_url: client.user.avatarURL , text: "© Verificado em" }
      }
    }).then(msg => {
      msg.delete(60000)
    });
  }
  else if ((member) && ((member.nickname) === null))
  {
    //member.user. (com busca)
    //message.author. (sem busca)
    //client.user. (bot info)
    //member.user.tag
    message.channel.send({embed:{
          color: 3447003,
          author: {  name: member.nickname, icon_url: member.user.avatarURL },
          title: `Informações do usuário`,  /*url: "http://google.com",*/ description: `${member.user.tag}`,
          fields: 
          [
            { name: `Apelido: `, value: `Usuário sem apelido` /*value: "[link](http://google.com)."*/, "inline": true },
            { name: `Nome cadastrado: `, value: `${member.user.username}`, "inline": true },
            { name: `Número do ID: `, value: `${member.user.id}`, "inline": true },
            { name: `BoT?: `, value: `${member.user.bot}`, "inline": true },
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