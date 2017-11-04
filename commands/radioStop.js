module.exports = (client, message, args) => {  
        
    message.reply('A rádio foi desligada! Para ligar novamente escolha uma rádio!');
    dispatcher.on('end', () => {
        // termina som
      });
    dispatcher.end();
    
};