module.exports = (client, message, args) => {
    
    var fortunes = [
        "sim",
        "não",
        "talvez"
    ];

    if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.sendMessage("Eu não entendi o que você quer dizer.");

  };