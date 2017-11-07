module.exports = (client, message, args) => {
    message.channel.reply('Pong...').then((msg) => {
    msg.edit(`${message.author.username} Pong! A sua **Latencia** é = ${msg.createdTimestamp - message.createdTimestamp}ms. A sua **API latencia** é = ${Math.round(client.ping)}ms`);
    //message.reply(`Pong! **Latencia** = ${msg.createdTimestamp - message.createdTimestamp}ms. **API Latencia** =  ${Math.round(client.ping)}ms`);    
    }) ;
    message.delete();
};