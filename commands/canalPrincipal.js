module.exports = (client, message, args) => {
    //167715230082662401  id  canal principal
    client.channels.get('167715230082662401').sendMessage(args.join(" "));
};