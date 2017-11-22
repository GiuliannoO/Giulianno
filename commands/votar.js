const sim = "✅";
const nao = "⛔";

module.exports = async (client, message, args) => { 
    //let msg = await message.channel.send("Votar");
    let msg = await message.channel.sendMessage(args.join(" "));
    await msg.react(sim);
    await msg.react(nao);
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: 60000})
    message.channel.send(`Resultado! \n\n${sim}: ${reactions.get(sim).count-1}\n${nao}: ${reactions.get(nao).count-1}`)   
};