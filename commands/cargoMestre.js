const Discord = require('discord.js');
//mestre
module.exports = (client, message, args) => {    
    let myRole = message.guild.roles.find("name", "Mestre");
    let membersWithRole = message.guild.roles.get(myRole).members;
    //console.log(`Got ${membersWithRole.size} members with that role.`);  
    message.reply(`Got ${membersWithRole.size} members with that role.`);
};