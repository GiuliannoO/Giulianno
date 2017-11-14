module.exports = (client, message, args, sql) =>{ 
    
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
          if (!row) return message.reply("O seu level atual é 0");
          message.reply(`O seu level atual é ${row.level}`);
        });      
    
};