const sim = "✅";
const nao = "❌";

module.exports = (client, message, args) => { 
    //let msg = await message.channel.send("Votar");
    let msgg = message.channel.sendMessage('Uma votação para **Sim**:✅ ou **Não**:❌ foi iniciada! \n**Assunto** = '+args.join(" ")); 
    msgg.react(sim); 
    msgg.react(nao); 
    //const reactions = await msgg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: 60000});
    const reactions = msgg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao);
    if (message.content === 'votarfim'){
    message.channel.send(`**Fim da votação!**\n\nAssunto: **${args.join(' ')}**\n\nResultado: ${sim} **Sim:** **${reactions.get(sim).count-1}** | ${nao} **Não:** **${reactions.get(nao).count-1}**`).then(msg => { msg.delete(60000) });
    message.delete();
    msgg.delete();}
    
};