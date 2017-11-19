module.exports = (channel, time) => {
    let cUpdate = client.channels.get('167715230082662401');
    if (cUpdate) {
        cUpdate.send('Uma nova mensagem foi fixada as '+time).then(msg => {
        msg.delete(60000)
      });
    }
  };