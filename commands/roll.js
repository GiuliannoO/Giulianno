module.exports = (client, message, args) => {    
     var roll = Math.floor(Math.random() * 6) + 1;
     message.reply('Você tirou **'+roll+'** no dado!').then(msg => {
        msg.delete(60000)
      });
      message.delete(60000); 
};