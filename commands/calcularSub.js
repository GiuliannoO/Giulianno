module.exports = (client, message, args) => {
    
    { let numArray = args.map(n=> parseFloat(n));   let total = numArray.reduce( (p,c) => p-c);  client.channels.get('377290228207190018').sendMessage(total);    }
    
  };