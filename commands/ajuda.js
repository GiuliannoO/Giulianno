module.exports = (client, message, args) => {

    
    
    /*message.channel.sendMessage("Lista de comandos para usar. \n"+
    "• **!ajuda**  -  Mostra todos os comandos usados no servidor.\n"+
    "• **!ping**  -  Mostra o seu ping atual.\n"+
    "• **!roll**  -  Rolar um dado comum de 6 lados.\n"+
    "• **Calculos matemáticos**  -  **!soma x x** / **!sub x x** / **!mult x x** / ~~**!div x x**~~.\n"+
    "• **Mover outros usuários de canal**  -  Clique, segure e arraste o alvo desejado.\n"+
    "• **!limpar**  -  Deleta __**permanentemente**__ todas as msg do canal atual.\n"+
    "*( Nao abuse deste comando! Ele deleta as msg para todo mundo. )*\n"+
    "• **Para salvar coisas importantes**  -  Use o canal de chat **#salvos**.\n"+
    "*( O canal **#salvos** está configurado para não deletar msgs. )*\n"+
    "• ~~**!ban nome**~~  -  Banir um usuário do servidor\n"+    
    "• ~~**!unban nome**~~  -  Retira o ban de um usuário\n"+
    "• ~~**!kick nome**~~  -  Kicka um usuário do servidor\n"+ 
    "• ~~**!sinfo**~~  -  Mostra as informações do servidor\n"+  
    "• ~~**!falar xx**~~  -  Comandos de fala especial\n"+                         
    "• **O sistema de webhook** é Gerenciado pelo **Mestre.**\n"); */

    message.channel.send({embed: {
      color: 3447003,
      title: "Lista de comandos do servidor",
      "description": " `!ajuda`  -  Mostra todos os comandos usados no servidor.\n",
      "description": " `!ping`  -  Mostra a sua API latencia e latencia atual.\n",
      "description": " `!roll`  -  Rolar um dado comum de 6 lados.\n",
      "description": " `Para salvar coisas importantes`  -  Use o canal de chat **#salvos**.\n",
      "description": " *( O canal **#salvos** está configurado para não deletar msgs. )*\n",
      "description": " `Mover outros usuários de canal`  -  Clique, segure e arraste o alvo desejado.\n",
      "description": " `Cálculos`  -  `!soma num num` , `!sub num num` , `!mult num num` , ~~!div num num~~.\n",
      "description": " `!limpar`  -  Deleta __**permanentemente**__ todas as msg do canal atual.\n",
      "description": " *( Nao abuse deste comando! Ele deleta as msg para todo mundo. )*\n",
      "description": " `!ban nome`  -  Banir um usuário do servidor.\n",
      "description": " `!unban nome`  -  Retira o ban de um usuário.\n",
      "description": " `!kick nome`  -  Kicka um usuário do servidor.\n",
      "description": " `!falar xx`  -  Comandos de fala especial.\n",
      "description": " ~~!sinfo~~  -  Mostra as informações do servidor.\n",
      "description": " **O sistema de webhook** é Gerenciado pelo **Mestre.**\n"
     


    }});


    
    
  };