module.exports = (bot, message) => {
  if (message.author.bot) return;

  if (message.content.indexOf(bot.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (bot.commands.has(command)) {
    bot.commands.get(command)(bot, message, args);
  }
};
