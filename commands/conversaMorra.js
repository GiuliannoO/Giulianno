module.exports = (client, message, args) => {
     message.reply("Morra você! Hrumm!").then(msg => {
        msg.delete(60000)
      });
      message.delete(60000);
};