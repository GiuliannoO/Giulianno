const sim = "✅";
const nao = "⛔";

module.exports = async (client, message, args) => { 
    //let msg = await message.channel.send("Votar");
    let msg = await message.channel.sendMessage(args.join(" "));
    await msg.react(sim);
    await msg.react(nao);
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: 60000});
    message.channel.send(`**Fim da votação!**\n\nAssunto: **${args}**\n\nResultado: ${sim} **Sim:** **${reactions.get(sim).count-1}** | ${nao} **Não:** **${reactions.get(nao).count-1}**`).then(msg => {
    msg.delete(60000) });
    message.delete(msg);
    message.delete(reactions);
    message.delete(5000);    
};