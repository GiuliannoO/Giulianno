module.exports = (client, message, args) => {
    client.channels.get('377290228207190018').reply(
    message.send('Pong...').then((msg) => {
    //msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    message.reply('377290228207190018').send(`Pong! **Latencia** = ${msg.createdTimestamp - message.createdTimestamp}ms. **API Latencia** =  ${Math.round(client.ping)}ms`); 
    //client.channels.get('377290228207190018').reply(`Pong! **API Latencia** =  ${Math.round(client.ping)}ms`);
    //message.reply

    }));
};