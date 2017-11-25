module.exports = (client, message, args) => { 
    function numEmoj (n) { return `${n}\u20e3` };
    var number = 6;
    
    //let msgg = message.channel.send("teste");
    message.react(numEmoji(number));       
}