const Discord = require('discord.js');

module.exports = (client, message, args) => {

  message.channel.send({embed:{
      color: 3447003,
      author: {  name: message.guild.name, icon_url: message.guild.iconURL },
      title: `Informações do servidor`,  /*url: "http://google.com",*/ description: `${message.guild.name}`,
      fields: 
      [
        { name: `Nome: `, value: `${message.guild.name}` /*value: "[link](http://google.com)."*/ , "inline": true },
        { name: `Número do ID: `, value: `${message.guild.id}`, "inline": true },
        { name: `Localização: `, value: `${message.guild.region}`, "inline": true },
        { name: `Data de criação: `, value: `${message.guild.createdAt}` },
        { name: `Dono: `, value: `${message.guild.owner.user.tag}`, "inline": true },
        { name: `Número do ID do dono: `, value: `${message.guild.owner.user.id}`, "inline": true },
        { name: `Total de canais: `, value: `${message.guild.channels.filter(chan => chan.type === 'voice').size} voz / ${message.guild.channels.filter(chan => chan.type === 'text').size} texto`, "inline": true },
        { name: `Total de BoTs: `, value: `${message.guild.members.filter(member => member.user.bot).size}`, "inline": true },
        { name: `Usuários cadastrados: `, value: `${message.guild.memberCount}`, "inline": true },
        { name: `Cargos existentes: `, value: message.guild.roles.map(role => role.name).join(', ') }
        //não use as roles fora das embeds(normal text) (vai chamar a atenção de todo mundo online)
      ],
      timestamp: new Date(), footer: { icon_url: client.user.avatarURL , text: "© Verificado em" }
    }
  }).then(msg => {
    msg.delete(60000)
  });
  message.delete(60000);
};