module.exports = (client, message, args) => {    
     var roll = Math.floor(Math.random() * 6) + 1;
     message.reply('Você rolou um dado de 6 lados e tirou **'+roll+'**!').then(msg => {
        msg.delete(60000)
      });
      message.delete(60000); 
};