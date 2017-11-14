//id canal afk = 167715581150101504
module.exports = (client, message, args) => {   
    let channel = client.channels.get('167715581150101504');
    if (channel) 
    {              
      channel.join()
      .then(connection => 
      { 
        //message.reply('x').then(msg => {
        message.send(`O usuário ${message.author.username} está Away!`).then(msg => {
        msg.delete(60000)
        });
        
      })
    .catch(console.log);
    } 
    message.delete(60000);
};