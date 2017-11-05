//"-------------------------------------------------------------------------------------------------\n"+
      

module.exports = (client, message, args) => {

    
    message.channel.send({embed: {
      color: 3447003,
      title: "Lista de comandos do servidor",
      "description": "● Tip **num**  =  Número.\n"+
      "­\n"+
      "● **!ajuda**  -  Mostra todos os comandos usados no servidor.\n"+
      "­\n"+
      "● **!ping**  -  Mostra a sua API latencia e latencia atual.\n"+
      "\n"+
      "● **!roll**  -  Rolar um dado comum de 6 lados.\n"+
      "\n"+
      "● **!tempo cidade**  -  Mostra o tempo atual na região escolhida. *( Ex: !tempo goiania )*\n"+
      "\n"+
      "● **Para salvar coisas importantes**  -  Use o canal de chat **#salvos**. *( O canal **#salvos** está configurado para não deletar msgs. )*\n"+
      "\n"+
      "● **Mover outros usuários de canal**  -  Clique, segure e arraste o alvo desejado.\n"+
      "\n"+
      "● **!userinfo @nome**  -  Mostra as informações do usuário escolhido.\n"+
      "\n"+
      "● **!serverinfo**  -  Mostra as informações do servidor.\n"+
      "\n"+
      "● **Cálculos matemáticos**\n"+
      "    **!soma num num**  -  Somar dois números.\n"+
      "    **!sub num num**  -  Subtrair dois números.\n"+
      "    **!mult num num**  -  Multiplicar dois números.\n"+
      "    **!div num num**  -  Dividir dois números.\n"+
      "\n"+
      "● Rádio 24/7 no canal de voz **Música** - Apenas uma rádio pode ser tocada por vez.\n"+
      "    **!playinitiald**  -  Escutar a rádio Initial D World.\n"+
      "    **!playanimenfo**  -  Escutar a rádio AnimeNfo.\n"+
      "    **!playmoe**  -  Escutar a rádio anime Moe.\n"+
      "    **!stop**  -  Desligar a rádio.\n"+
      "*( Volume - Click direito no BoT e ajuste o volume do usuário. | Caso desejar escutar outras rádios informe os Admins com o link do stream da rádio online + port. Ex: http:// site.com:8888/ )*\n"+
      "\n"+
      "● **!limpar** ou **!limpar num**  -  Deleta __**permanentemente**__  um número x ou todas as msg do canal atual. *( Nao abuse deste comando! Ele deleta as msg para todo mundo. Caso alguma msg ainda continuar na tela: Isso é um bug do cliente Discord. Fechando e re-abrindo o cliente você verá que a msg foi apagada. )*\n"+
      "\n"+
      "● *( Admin+ )* **!falar xx**  -  Comandos de fala especial.\n"+
      "\n"+
      "● **O sistema de webhook** é Gerenciado apenas pelo **Mestre.**\n"

    }});
    
    
  };