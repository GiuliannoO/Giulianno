module.exports = (client, message, args) => {
    //269005594462126080  id  canal eventos
    client.channels.get('269005594462126080').sendMessage(args.join(" "));
    message.delete(60000);
};