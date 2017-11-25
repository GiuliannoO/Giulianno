function numEmoj (n) { return `${n}\u20e3` };
var number = 6;
module.exports = (client, message, args) => { 
    
    let msgg = message.channel.send("teste");
    msgg.react(numEmoji(number));
       
}