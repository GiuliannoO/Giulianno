module.exports = (client, message, args) => {
    client.channels.get('269932626482167810').sendMessage(
    message.channel.send('Pong...').then((msg) => {
    //msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    message.reply(`Pong! **Latencia** = ${msg.createdTimestamp - message.createdTimestamp}ms. **API Latencia** =  ${Math.round(client.ping)}ms`); 
    }) );
};