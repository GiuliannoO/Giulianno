module.exports = (client, message, args) => { 
    
    var number = 6;
    message.channel.send("teste");
    message.react(numEmoji(number));
       
}