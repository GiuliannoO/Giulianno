const Discord = require('discord.js');

module.exports = (client, message, args) => {

  message.channel.send({embed:{
      color: 3447003,
      author: {  name: message.guild.name, icon_url: message.guild.iconURL },
      title: `Informações do servidor.`,  /*url: "http://google.com",*/ description: `${message.guild.name}`,
      fields: 
      [
        { name: `Nome do servidor: `, value: `${message.guild.name}` /*value: "[link](http://google.com)."*/ },
        { name: `Número do ID do servidor: `, value: `${message.guild.id}` },
        { name: `Data de criação do servidor: `, value: `${message.guild.createdAt}` },
        { name: `Dono do servidor: `, value: `${message.guild.owner.user.tag}` },
        { name: `Número do ID do dono do servidor: `, value: `${message.guild.owner.user.id}` },
        { name: `Número de canais no servidor: `, value: `${message.guild.channels.filter(chan => chan.type === 'voice').size} voz / ${message.guild.channels.filter(chan => chan.type === 'text').size} texto` },
        { name: `Número de BoTs no servidor: `, value: `${message.guild.members.filter(member => member.user.bot).size}` },
        { name: `Número de usuários cadastrados: `, value: `${message.guild.memberCount}` },
        { name: `Cargos existentes no servidor: `, value: message.guild.roles.map(role => role.name).join(', ') }
        //não use as roles fora das embeds(normal text) (vai chamar a atenção de todo mundo online)
      ],
      timestamp: new Date(), footer: { icon_url: client.user.avatarURL , text: "© Verificado em" }
    }
  });
};