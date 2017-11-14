//id canal afk = 167715581150101504

module.exports = (client, message, args) => { 

    //await client.send_message(message.channel, 'Moving');
    await client.move_member(message.author, client.get_channel('167715581150101504'));    

        
};