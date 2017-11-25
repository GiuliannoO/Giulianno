const sim = "✅";
const nao = "❌";

module.exports = async (client, message, args) => { 
    //let msg = await message.channel.send("Votar");
    let msgg = await message.channel.sendMessage('Uma votação para **Sim**:✅ ou **Não**:❌ foi iniciada! \n**Assunto** = '+args.join(" ")).then(function (message) 
    {   message.react(sim); 
        message.react(nao); 
        //message.delete(5000);
    }).catch(function() {
        const reactions = await msgg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: 60000});
      });
    //await msgg.react(sim);
    //await msgg.react(nao);
    //message.channel.sendMessage('Uma votação para **Sim**:✅ ou **Não**:❌ foi iniciada! \n**Assunto** = '+args.join(" ")).then(function (message) { message.react(sim); message.react(nao); message.delete(5000); }).catch(function() {   });
    //const reactions = await msgg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: 60000});
    //message.channel.send(`**Fim da votação!**\n\nAssunto: **${args.join(' ')}**\n\nResultado: ${sim} **Sim:** **${reactions.get(sim).count-1}** | ${nao} **Não:** **${reactions.get(nao).count-1}**`).then(msg => {
    //msg.delete(60000) });
    //const reactions = await msgg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: 60000});
    message.channel.send(`**Fim da votação!**\n\nAssunto: **${args.join(' ')}**\n\nResultado: ${sim} **Sim:** **${reactions.get(sim).count-1}** | ${nao} **Não:** **${reactions.get(nao).count-1}**`).then(msg => { msg.delete(60000) });
        
    message.delete(5000);  
    
};