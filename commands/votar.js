const sim = "✅";
const nao = "⛔";
var int = tempo; 

module.exports = async (client, message, args) => { 
    //let msg = await message.channel.send("Votar");
    let msg = await message.channel.sendMessage(args.join(" ",tempo));
    await msg.react(sim);
    await msg.react(nao);
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: tempo});
    message.channel.send(`A votação acabou! Resultado: \n\n${sim}: ${reactions.get(sim).count-1}\n\n${nao}: ${reactions.get(nao).count-1}`);
    message.delete(1000);
};