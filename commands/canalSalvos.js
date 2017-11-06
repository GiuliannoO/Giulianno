module.exports = (client, message, args) => {
    //269932626482167810  id  canal salvos
    client.channels.get('269932626482167810').sendMessage(args.join(" "));
};