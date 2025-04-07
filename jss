//rodadaFacil = 1

/*
nivel = prompt("Escolha o nível de dificuldade 1- Facil 2-Médio 3-Dificil")
if(nivel == 1){
   alert("Você está no nível fácil")
  while(rodadaFacil <= 5){
    console.log("Rodada: "+ rodadaFacil+ "Escolha um vidro (1, 2 ou 3)?")
    escolhaJogadorF = prompt("Nivel:"+)
  }
}*/
rodada = 1 
while(rodada <= 3){
  console.log("Rodada:"+ rodada)
  escolhaJogador = prompt("Nivel:"+ rodada+ "Escolha um vidro (1, 2 ou 3)?")
  pisoQuebrado = Math.floor(Math.random() * 3) + 1 ;
  
  if(escolhaJogador == pisoQuebrado){
    //escolheu o vidro que estava quebrado
    alert("Vidro quebrou acabou o jogo para você!")
    rodada = 1000;
  }
  else{
    alert("Passou! Piso quebrado estava na ponte:"+ pisoQuebrado)
  }
  rodada = rodada + 1 
}
//veio para ca quando rodada == 4
// se rodada >=4 
if(rodada == 4 ){
  alert("Você venceu! Parabens!")
}
//No nível fácil, o jogador terá 5 rodadas.
//No nível médio, o jogador terá 3 rodadas.
//No nível difícil, o jogador terá apenas 1 rodada.
//Pisos Aleatórios: Em vez de ter sempre 3 pisos, faça com que o número de pisos disponíveis varie de acordo com o nível de dificuldade:
