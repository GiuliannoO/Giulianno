module.exports = (client, message, args) => {
    //269932626482167810  id  canal salvos
    //bot.channels.get('269932626482167810').sendMessage(args.join(" "));
    channel = client.channels.get('269932626482167810'); 
    channel.sendMessage(args.join(" "));
};