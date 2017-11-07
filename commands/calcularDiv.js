module.exports = (client, message, args) => {
    
    { let numArray = args.map(n=> parseFloat(n)).then(msg => {msg.delete(10000)});;  let total = numArray.reduce( (p,c) => (p/c|0)); message.channel.sendMessage(total); }   
    
  };