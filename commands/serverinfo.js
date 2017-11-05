const Discord = require('discord.js');

module.exports = (client, message, args) => {
  /*const embed = new Discord.MessageEmbed()
    .setDescription(`${message.guild.name}'s Information and Details`)
    .setThumbnail(message.guild.iconURL())
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL())
    .addField('Members', `${message.guild.members.filter(member => member.user.bot).size} bots of ${message.guild.memberCount} members.`)
    .addField('Channels', `${message.guild.channels.filter(chan => chan.type === 'voice').size} voice / ${message.guild.channels.filter(chan => chan.type === 'text').size} text`)
    .addField('Roles', message.guild.roles.map(role => role.name).join(', '));
  message.channel.send({ embed })*/

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
        { name: `Número de BoTs no servidor: `, value: `${message.guild.members.filter(member => member.user.bot).size}` },
        { name: `Número de usuários cadastrados: `, value: `${message.guild.memberCount}` },
        { name: `Cargos existentes no servidor: `, value: message.guild.roles.map(role => role.name).join(', ') }
      ],
      timestamp: new Date(), footer: { icon_url: client.user.avatarURL , text: "© Verificado em" }
    }
  });
};