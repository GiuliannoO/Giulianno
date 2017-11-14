module.exports = (client, message, args, sql) =>{ 

       sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
          if (!row) return message.reply("Você ainda não tem pontos!");
          message.reply(`Você tem ${row.points} pontos!`);
        });          

};