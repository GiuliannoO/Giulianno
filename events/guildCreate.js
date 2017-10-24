module.exports = (bot, guild) => {
  bot.log('Log', `Eu fui adicionado a Guilda: ${guild.name}, por: ${guild.owner.user.tag}.`);
};
