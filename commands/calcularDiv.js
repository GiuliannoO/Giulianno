var x ;
var y ;
var z = Math.floor(x / y);

module.exports = (client, message, args) => {
    
    /*{ let numArray = args.map(n=> parseInt(n));  let total = numArray.reduce( (p,c) => p/c>>0); message.channel.sendMessage(total); }*/

    if (y == 0)
    {
      message.reply("Não existe divisão por 0.");
    }
    else
    {
      message.reply("Resultado" + z);
    }

      
  
    
  };