module.exports = (client, message, args) => {
    //167715230082662401  id  canal principal
    client.channels.get('167715230082662401').sendMessage(":black_square_button: **O BoT está sendo atualizado!**").then(msg => {
        msg.delete(60000)
      });
    message.delete(60000);
};