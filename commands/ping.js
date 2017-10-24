module.exports = (bot, message, args) => {
    message.channel.send('Pong...').then((msg) => {
      msg.edit(`Pong! Latencia = ${msg.createdTimestamp - message.createdTimestamp}ms. API latencia = ${Math.round(bot.ping)}ms`);
    });
  };