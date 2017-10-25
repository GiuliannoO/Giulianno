module.exports = (client, message, args) => {

    
    message.channel.send({embed: {
      color: 3447003,
      title: "Lista de comandos do servidor",
      "description": " **!ajuda**  -  Mostra todos os comandos usados no servidor.\n"+
      " **!ping**  -  Mostra a sua API latencia e latencia atual.\n"+
      " **!roll**  -  Rolar um dado comum de 6 lados.\n"+
      " **Para salvar coisas importantes**  -  Use o canal de chat **#salvos**.\n"+
      " *( O canal **#salvos** está configurado para não deletar msgs. )*\n"+
      " **Mover outros usuários de canal`  -  Clique, segure e arraste o alvo desejado.\n"+
      " **Cálculos**  -  **!soma num num** , **!sub num num** , **!mult num num** , **!div num num**.\n"+
      " **!limpar**  -  Deleta __**permanentemente**__ todas as msg do canal atual.\n"+
      " *( Nao abuse deste comando! Ele deleta as msg para todo mundo. )*\n"+
      " **!ban nome**  -  Banir um usuário do servidor.\n"+
      " **!unban nome**  -  Retira o ban de um usuário.\n"+
      " **!kick nome**  -  Kicka um usuário do servidor.\n"+
      " **!falar xx**  -  Comandos de fala especial.\n"+
      " ~~!sinfo~~  -  Mostra as informações do servidor.\n"+
      " **O sistema de webhook** é Gerenciado pelo **Mestre.**\n"
     


    }});


    
    
  };