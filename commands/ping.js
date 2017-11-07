module.exports = (client, message, args) => {
    client.channels.get('377290228207190018').reply("...");
    client.channels.get('377290228207190018').send('Pong...').then((msg) => {
    msg.edit(`Pong! A sua **Latencia** é = ${msg.createdTimestamp - message.createdTimestamp}ms. A sua **API latencia** é = ${Math.round(client.ping)}ms`);
    //message.reply(`Pong! **Latencia** = ${msg.createdTimestamp - message.createdTimestamp}ms. **API Latencia** =  ${Math.round(client.ping)}ms`); 
    }) ;
};