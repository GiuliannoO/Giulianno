module.exports = (client, message, args) => {
    
    { let numArray = args.map(n=> parseInt(n));  //let total = numArray.reduce( (p,c) => 
      
      if (c === 0){ 
        message.reply("Você não tem poder para usar este comando!");  }

      else{
      
      let total = numArray.reduce( (p,c) =>
      p/c>>0); message.channel.sendMessage(total); }
     
  
    }
    
  };