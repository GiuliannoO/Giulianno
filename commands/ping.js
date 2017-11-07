module.exports = (client, message, args) => {
    //message.channel.send('Pong...').then((msg) => {
    //msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    //message.reply(`Pong! **Latencia** = ${msg.createdTimestamp - message.createdTimestamp}ms. **API Latencia** =  ${Math.round(client.ping)}ms`); 
    //}) ;

      return  client.pings.reduce((prev, p) => prev + p, 0) / client.pings.length;
      
};