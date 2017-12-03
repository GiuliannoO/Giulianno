//"-------------------------------------------------------------------------------------------------\n"+
//----------------------------------------------------------------------------------------------------------------------------------
//client.channels.get('').
//message.channel.send(
//●

module.exports = (client, message, args) => {

      message.channel.send({embed: {
      color: 3447003,
      title: ":question: Lista de comandos do servidor",
      "description": "● **!ajuda**  -  Mostra todos os comandos usados no servidor\n\n"+
      "● **!ping**  -  Mostra a sua latencia e API latencia atual\n\n"+
      "● **!invite**  -  Criar um link para invitar novos usuários\n\n"+
      //"● **!bot**  -  Chamar a atenção do BoT\n\n"+
      //"● **!level** e **!pontos**  -  Ver o seu XP e quantidade de Pontos no servidor\n\n"+
      "● **!afk**  -  Inicia o modo Ausente\n\n"+
      "● **!roll6**  -  Rolar um dado comum de 6 lados\n\n"+
      "● **!tempo cidade**  -  Mostra o tempo atual na região escolhida *( Ex: !tempo goiania )*\n\n"+
      "● **Para salvar links ou mensagens importantes**  -  Use o canal de chat **#salvos**\n\n"+
      "● **Mover outros usuários de canal**  -  Clique, segure e arraste o alvo desejado\n\n"+
      "● **!userinfo @nome**  -  Mostra as informações do usuário escolhido\n\n"+
      "● **!serverinfo**  -  Mostra as informações do servidor\n\n"+
      //"● **Cálculos matemáticos**\n"+
      //"    **!soma num num**  -  Somar dois números\n"+
      //"    **!sub num num**  -  Subtrair dois números\n"+
      //"    **!mult num num**  -  Multiplicar dois números\n"+
      //"    **!div num num**  -  Dividir dois números\n\n"+
      "● Rádio 24/7 no canal de voz **Música** - Apenas uma rádio pode ser tocada por vez\n"+
      "    **!playhrh**  -  Escutar a rádio *Hard Rock Heaven 80s**\n"+
      "    **!playinitiald**  -  Escutar a rádio **Initial D World**\n"+
      "    **!playanimenfo**  -  Escutar a rádio **AnimeNfo**\n"+
      "    **!playmoe**  -  Escutar a rádio **anime Moe**\n"+
      "    **!stop**  -  Desligar a rádio\n"+
      "*( Volume - Click direito no BoT e ajuste o volume do usuário | Caso desejar escutar outras rádios informe os Admins com o link do stream da rádio online ou indique um arquivo .pls )*\n\n"+
      //"● **!limpar** ou **!limpar num**  -  Deleta __**permanentemente**__  um número x ou todas as msg do canal atual *( Nao abuse deste comando! Ele deleta as msg para todo mundo )*\n\n"+
      //"● *( Admin+ )* **!falar xx**  -  Comandos de fala especial\n\n"+
      //"● *( Admin+ )* **!fsalvos xx**  -  Comandos de fala especial\n\n"+
      //"● *( Admin+ )* **!fprincipal xx**  -  Comandos de fala especial\n\n"+
      "● *( Admin+ )* **!votar [texto?]**  -  Inicia uma votação para **Sim** ou **Não**\n"+
      "*( O tempo da votação tem um total de 1 minuto para o fim e contagem dos votos )*\n\n"+
      "● **O sistema de webhook** é Gerenciado apenas pelo **Mestre**\n"+
      "*( Os comandos enviados pelo/para o BoT são apagados automaticamente após 1 minuto )*"

    }}).then(msg => {
      msg.delete(60000)
    });
    message.delete(60000); 
};