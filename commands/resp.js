var fortunes = [
    "sim",
    "não",
    "talvez"
];

module.exports = (client, message, args) => {    
    

    if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.sendMessage("Por favor! Faça uma pergunta.");

  };