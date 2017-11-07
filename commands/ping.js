//const msg = await message.channel.send("Ping?");
//msg.edit(`Pong! \`${msg.createdTimestamp - message.createdTimestamp}\`ms`);

module.exports = (client, message, args) => {
    client.channels.get('377290228207190018').send('Pong...').then((msg) => {
    msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    //message.reply(`Pong! **Latencia** = ${msg.createdTimestamp - message.createdTimestamp}ms. **API Latencia** =  ${Math.round(client.ping)}ms`); 
    }) ;
      
    //client.channels.get('377290228207190018').send(`${member.user.username} o seu ping API é = ${Math.round(client.ping)}ms`);
};