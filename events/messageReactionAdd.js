module.exports = (client, reaction, user) => {
  client.log('Log', `${user.tag} reagiu à mensagem de id ${reaction.message.id} com a reação: ${reaction.emoji}`);
};