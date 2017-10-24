module.exports = (client, guild) => {
  client.log('Log', `Eu fui adicionado a Guilda: ${guild.name}, por: ${guild.owner.user.tag}, com ${guild.memberCount} membros.`);
};