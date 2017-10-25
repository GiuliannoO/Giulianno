module.exports = (client, message, args) => {
    
    { let numArray = args.map(n=> parseInt(n));  let total = numArray.reduce( (p,c) => p/c>>0); /*message.channel.sendMessage(total);*/ }

    if (c == 0)
    {
      message.reply("Não existe divisão por 0.");
    }
    else
    {
      message.reply("Resultado" + total);
    }

      
  
    
  };