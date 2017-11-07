var fortunes = [
    "sim",
    "não",
    "talvez"
];

module.exports = (client, message, args) => {  
    if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]).then(msg => {
        msg.delete(60000)
      });
    else message.channel.sendMessage("Por favor! Faça uma pergunta.").then(msg => {
        msg.delete(60000)
      });
      message.delete(60000);
  };