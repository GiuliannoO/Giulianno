module.exports = (client, reaction, user) => {
  client.log('Log', `${user.tag} reagiu a mensagem de ID ${reaction.message.id} com a reação: ${reaction.emoji}`);
};
