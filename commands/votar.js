const sim = "✅";
const nao = "⛔";

module.exports = async (client, message, args) => { 
    

    if ((message.member.nickname) !== null){
    //let msg = await message.channel.send("Votar");
    let msg = await message.channel.sendMessage(args.join("hue "));
    //message.delete(5000);
    await msg.react(sim);
    await msg.react(nao);
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: 60000}).then(msg => {
        msg.delete(60000)
    });
    message.channel.send(`A votação acabou! \n\n Votação criada por: ${message.member.nickname} \n\n Assunto: ${message.channel.get(args.join())} \n\n Resultado: \n\n${sim} Sim = ${reactions.get(sim).count-1}\n\n${nao} Não = ${reactions.get(nao).count-1}`).then(msg => {
    msg.delete(120000) }); 
    }



    else if ((message.member.nickname) === null){
    //let msg = await message.channel.send("Votar");
    let msg = await message.channel.sendMessage(args.join(`Uma votação foi iniciada por: ${message.author.username} \n\n`," "));
    //message.delete(5000);
    await msg.react(sim);
    await msg.react(nao);
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === sim || reaction.emoji.name === nao, {time: 60000}).then(msg => {
        msg.delete(60000)
    });
    message.channel.send(`A votação acabou! \n\n Votação criada por: ${message.author.username} \n\n Assunto: ${message.channel.get(args.join())} \n\n Resultado: \n\n${sim} Sim = ${reactions.get(sim).count-1}\n\n${nao} Não = ${reactions.get(nao).count-1}`).then(msg => {
    msg.delete(120000) }); 
    }  
};