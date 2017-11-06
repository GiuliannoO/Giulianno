module.exports = (client, message, args) => {
    //167715230082662401  id  canal principal
    //bot.channels.get('167715230082662401').sendMessage(args.join(" "));
    channel = client.channels.get('167715230082662401'); 
    channel.sendMessage(args.join(" "));
};