var bg,bgImg;
var player, shooterImg, shooter_shooting;



var zombieGroup;
var life = 3;



function preload(){
  
 

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionar a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//criar o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   //criar sprites para representar as vidas restantes
   
   

    //criar o grupo para os zumbis   
    
}

function draw() {
  background(0); 


    //exibir a imagem apropriada de acordo com as vidas restantes
    


  
    //ir para gameState (estado do jogo) "você perdeu" quando restar 0 vidas 
    


  
  //mover o jogador para cima e para baixo e tornar o jogo compatível com dispositivos móveis usando touches (toques)
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//disparar as balas e mudar a imagem do atirador para a posição de tiro quando a tecla espaço for pressionada
if(keyWentDown("space")){
  
  player.addImage(shooter_shooting)
  
 
}

//o jogador volta à imagem original quando paramos de pressionar a tecla espaço
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}


//destruir o zumbi quando o jogador toca nele





//chamar a função para gerar os zumbis



drawSprites();
text("Vidas = " + life,displayWidth-200,displayHeight/2-280)
}



//criar função para gerar os zumbis
function enemy(){
  if(frameCount%50===0){

    //atribuir posições x e y aleatórias para o zumbi aparecer
    zombie = createSprite(random(500,1100),random(100,500),40,40)

    //add imagem ao zumbi, velocidade e diminuir a escala dele
    
   

    zombie.lifetime = 400

    //add o zumbi ao grupo
   

  }

}
