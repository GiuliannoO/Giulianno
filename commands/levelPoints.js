module.exports = (client, message, args, sql) =>{ 
       sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
          if (!row) return message.reply("Você ainda não tem **pontos**!").then(msg => {
            msg.delete(60000)
          });
          message.reply(`Você tem **${row.points}** pontos!`).then(msg => {
            msg.delete(60000)
          });
        });
        message.delete(60000);; 
};