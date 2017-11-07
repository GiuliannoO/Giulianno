module.exports = (client, message, args) => {
    client.channels.get('377290228207190018').send('Pong...').then((msg) => {
    //msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    message.reply(`Pong! **Latencia** = ${msg.createdTimestamp - message.createdTimestamp}ms. **API Latencia** =  ${Math.round(client.ping)}ms`);    
    });
};