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
    //member.user.tag
    message.channel.send({embed:{
          color: 3447003,
          author: {  name: member.nickname, icon_url: member.user.avatarURL },
          title: `Informações do usuário.`,  /*url: "http://google.com",*/ description: `${member.user.tag}`,
          fields: 
          [
            { name: `Apelido: `, value: `${member.nickname}` /*value: "[link](http://google.com)."*/ },
            { name: `Nome cadastrado: `, value: `${member.user.username}` },
            { name: `Número do ID: `, value: `${member.user.id}` },
            { name: `Conta verificada: `, value: `${member.verified}` },
            { name: `Usuário premium: `, value: `${member.premium}` },
            { name: `Celular: `, value: `${member.mobile}` },
            { name: `BoT: `, value: `${member.user.bot}` },
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