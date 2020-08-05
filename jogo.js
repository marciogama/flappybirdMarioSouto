console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0, 0, canvas.width, canvas.height)
    contexto.drawImage(
      sprites, 
      planoDeFundo.spriteX, planoDeFundo.spriteY,   // sprite x e y
      planoDeFundo.largura, planoDeFundo.altura,    // Largura e Altura do recorte na sprite
      planoDeFundo.x, planoDeFundo.y, 
      planoDeFundo.largura, planoDeFundo.altura,
    );
    contexto.drawImage(
      sprites, 
      planoDeFundo.spriteX, planoDeFundo.spriteY,   // sprite x e y
      planoDeFundo.largura, planoDeFundo.altura,    // Largura e Altura do recorte na sprite
      planoDeFundo.x + planoDeFundo.largura, planoDeFundo.y, 
      planoDeFundo.largura, planoDeFundo.altura,
    );
  }
}

const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    contexto.drawImage(
      sprites, 
      chao.spriteX, chao.spriteY,   // sprite x e y
      chao.largura, chao.altura,    // Largura e Altura do recorte na sprite
      chao.x, chao.y, 
      chao.largura, chao.altura,
    );
    contexto.drawImage(
      sprites, 
      chao.spriteX, chao.spriteY,   // sprite x e y
      chao.largura, chao.altura,    // Largura e Altura do recorte na sprite
      chao.x + chao.largura, chao.y, 
      chao.largura, chao.altura,
    );
  }
}

const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  desenha() {
    contexto.drawImage(
      sprites, 
      flappyBird.spriteX, flappyBird.spriteY,   // sprite x e y
      flappyBird.largura, flappyBird.altura,    // Largura e Altura do recorte na sprite
      flappyBird.x, flappyBird.y, 
      flappyBird.largura, flappyBird.altura,
    );
  }
}

function loop() {
  
  planoDeFundo.desenha();
  chao.desenha();
  flappyBird.desenha();

  flappyBird.y += 1;

  requestAnimationFrame(loop);
};

loop();