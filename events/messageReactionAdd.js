module.exports = (client, reaction, user) => {
  client.log('Log', `${user.tag} reacted to message id ${reaction.message.id} with the reaction: ${reaction.emoji}`);
};