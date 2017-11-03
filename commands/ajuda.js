module.exports = (client, message, args) => {

    
    message.channel.send({embed: {
      color: 3447003,
      title: "Lista de comandos do servidor",
      "description": "• **!ajuda**  -  Mostra todos os comandos usados no servidor.\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• **!ping**  -  Mostra a sua API latencia e latencia atual.\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• **!roll**  -  Rolar um dado comum de 6 lados.\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• **Para salvar coisas importantes**  -  Use o canal de chat **#salvos**.\n"+
      " *( O canal **#salvos** está configurado para não deletar msgs. )*\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• **Mover outros usuários de canal**  -  Clique, segure e arraste o alvo desejado.\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• **Cálculos**  -  **!soma num num** , **!sub num num** , **!mult num num** , **!div num num**.\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• **!play**  -  Liga a rádio do BoT para tocar músicas de animes 24/7 no canal de áudio Música.\n"+
      " *( Volume - Click direito no BoT e ajuste o volume do usuário. )*\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• **!limpar**  -  Deleta __**permanentemente**__ todas as msg do canal atual.\n"+
      " *( Nao abuse deste comando! Ele deleta as msg para todo mundo. )*\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• **!falar xx**  -  Comandos de fala especial.\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• ~~!sinfo~~  -  Mostra as informações do servidor.\n"+
      "-------------------------------------------------------------------------------------------------\n"+
      "• **O sistema de webhook** é Gerenciado apenas pelo **Mestre.**\n"

    }});
    
    
  };