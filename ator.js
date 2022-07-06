//variaveis do ator
let yAtor = 366;
let xAtor = 150;
let ponto = 0;
let colisao = false;

function mostrarAtor(){
  image(imagemAtor, xAtor, yAtor, 30,30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
   if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}

function verificarFim(){
  if( yAtor < 15){
    ponto += 1;
    yAtor = 366;
    somPonto.play();
  }
}

function verificarColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      somColisao.play();
      if (pontosMaiorZero()){
        ponto -= 1;
      }
            
    }
  }
}

function colidiu() {
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(ponto, width / 5, 25);
}

function limiteJogo(){
  if (yAtor > 366){
    yAtor = 366;
  }
}

function pontosMaiorZero(){
  return ponto > 0
}