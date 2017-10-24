module.exports = (client, message, args) => {
    
    { let numArray = args.map(n=> parseInt(n));  let total = numArray.reduce( (p,c) => p/c);
        if (c != 0){
        message.channel.sendMessage(total);  }
        else
        {
            message.reply("Não existe divisão por 0.");
        }}

  };