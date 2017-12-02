const sim = "✅";
const nao = "❌";

module.exports = async (client, message, args) => { 
    //let msg = await message.channel.send("Votar");
    let modRole = message.guild.roles.find("name", "Mestre","Admin");
    if(message.member.roles.has(modRole.id))
    {
    let msgg = await message.channel.sendMessage('Uma votação para **Sim**:✅ ou **Não**:❌ foi iniciada! \n( 1 minuto para o fim da votação ) \n**Assunto** = '+args.join(" ")); 
    await msgg.react(sim); 
    await msgg.react(nao); 
    const reactions = await msgg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: 60000});
    message.channel.send(`**Fim da votação!**\n\nAssunto: **${args.join(' ')}**\n\nResultado: ${sim} **Sim:** **${reactions.get(sim).count-1}** | ${nao} **Não:** **${reactions.get(nao).count-1}**`).then(msg => { msg.delete(60000) });
    message.delete();
    msgg.delete();
    }
    else
    { 
        message.reply("Desculpe, mas você não tem poder para usar este comando!").then(msg => {
            msg.delete(60000)
        }); 
        message.delete(60000);  
    }    
};