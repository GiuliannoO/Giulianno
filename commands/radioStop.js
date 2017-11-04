module.exports = (client, message, args) => {  
        
    dispatcher.on('end', () => {
        // termina som

        //message.reply('A rádio foi desligada! Para ligar novamente escolha uma rádio!');
        
      });
    dispatcher.end();
    message.reply('A rádio foi desligada! Para ligar novamente escolha uma rádio!');

};