module.exports = (client, message, args) => {

    
    message.channel.send({embed: {
      color: 3447003,
      title: "Lista de comandos do servidor",
      "description": "● **!ajuda**  -  Mostra todos os comandos usados no servidor.\n"+
      //"-------------------------------------------------------------------------------------------------\n"+
      "­\n"+
      "● **!ping**  -  Mostra a sua API latencia e latencia atual.\n"+
      "\n"+
      "● **!roll**  -  Rolar um dado comum de 6 lados.\n"+
      "\n"+
      "● **Para salvar coisas importantes**  -  Use o canal de chat **#salvos**. *( O canal **#salvos** está configurado para não deletar msgs. )*\n"+
      "\n"+
      "● **Mover outros usuários de canal**  -  Clique, segure e arraste o alvo desejado.\n"+
      "\n"+
      "● **Cálculos matemáticos**\n"+
      "    **!soma num num**  -  Somar dois números.\n"+
      "    **!sub num num**  -  Subtrair dois números.\n"+
      "    **!mult num num**  -  Multiplicar dois números.\n"+
      "    **!div num num**  -  Dividir dois números.\n"+
      "\n"+
      "● Música 24/7 no canal de voz **Música** - Apenas uma rádio pode ser tocada por vez.\n"+
      "    **!playinitiald**  -  Escutar a rádio Initial D World.\n"+
      "    **!playanimenfo**  -  Escutar a rádio AnimeNfo.\n"+
      "    **!playmoe**  -  Escutar a rádio anime Moe.\n"+
      "    **!stop**  -  Desligar a rádio.\n"+
      "*( Volume - Click direito no BoT e ajuste o volume do usuário. )*\n"+
      "\n"+
      "● **!limpar**  -  Deleta __**permanentemente**__ todas as msg do canal atual. *( Nao abuse deste comando! Ele deleta as msg para todo mundo. )*\n"+
      "\n"+
      "● *( Admin+ )* **!falar xx**  -  Comandos de fala especial.\n"+
      "\n"+
      "● **O sistema de webhook** é Gerenciado apenas pelo **Mestre.**\n"

    }});
    
    
  };