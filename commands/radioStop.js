module.exports = (client, message, args) => {  
    
    dispatcher.on('end', () => {
        // para o som
        message.reply('A rádio foi desligada! Para ligar novamente escolha uma rádio!');
      });
    
    dispatcher.end(); 

};