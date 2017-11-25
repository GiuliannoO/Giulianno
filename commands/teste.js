var number = 6;
module.exports = (client, message, args) => { 
    
    let msgg = message.channel.send("teste");
    msgg.react(numEmoji(number));
       
}