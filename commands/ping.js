module.exports = (client, message, args) => {
    message.channel.send('Pong...').then((msg) => {
    //msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    client.channels.get('377290228207190018').reply(`Pong! **Latencia** = ${msg.createdTimestamp - message.createdTimestamp}ms. **API Latencia** =  ${Math.round(client.ping)}ms`);    
    });
};