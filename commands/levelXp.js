module.exports = (client, message, args, sql) =>{     
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
          if (!row) return message.reply("O seu **level** atual é **0**!").then(msg => {
            msg.delete(60000)
          });                
          message.reply(`O seu **level** atual é **${row.level}** e você tem **${row.points}** pontos de xp!`).then(msg => {
            msg.delete(60000)
          });
        });
        message.delete(60000);;   
};