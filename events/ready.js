module.exports = (bot) => {
  bot.log('Log', `Entrou como ${bot.user.tag}!`);
  bot.user.setPresence({ game: { name: 'Digite !ajuda', type: 0 } });
 
};
