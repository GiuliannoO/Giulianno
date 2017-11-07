module.exports = (client, message, args) => {
    
    { let numArray = args.map(n=> parseFloat(n));  let total = numArray.reduce( (p,c) => (p/c|0)); message.channel.sendMessage(total); } 
    
  };