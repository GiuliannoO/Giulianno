module.exports = (client, message) => {
  if (message.author.bot) return;

  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (client.commands.has(command)) {
    client.commands.get(command)(client, message, args);
  }

  //xp
  if(!userData[sender.id]) userData[sender.id] = {
    messagesSent: 0
  }
  userData[sender.id].messagesSent++;
  fs.writeFile('Storage/userData.json', JSON.stringify(userData),(err) => {
  if (err) console.error(err); });
};