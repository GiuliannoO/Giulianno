//id canal afk = 167715581150101504

module.exports = (client, message, args) => { 

    let channel = client.channels.get('375842517566095360');
    
    setVoiceChannel(channel) 
    {
        return client.edit({ channel });
    }  

        
};