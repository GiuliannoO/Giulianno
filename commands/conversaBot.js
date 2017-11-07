module.exports = (client, message, args) => {
     message.reply("Me chamou? Se precisar de algo use o comando **!ajuda**!").then(msg => {
        msg.delete(60000)
      });
      message.delete(60000);
};