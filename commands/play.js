module.exports = (client, message, args) => {   
    
const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Conectado!'))
    .catch(console.error);


};