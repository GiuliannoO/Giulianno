module.exports = (client, message, args) => {
    
     var roll = Math.floor(Math.random() * 6) + 1;
     message.reply("Você tirou " + roll); 


};