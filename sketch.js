function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostrarAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltarPosicaoInicialCarro();
  verificarFim();
  verificarColisao();
  incluiPontos();
  limiteJogo();
}

