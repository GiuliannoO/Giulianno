var fortunes = [
    "sim",
    "não",
    "talvez"
];

module.exports = (client, message, args) => {
    
    

    message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    

  };