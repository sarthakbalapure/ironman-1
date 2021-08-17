
var bg, backgroundImg;
var player, ironMan;







function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironMan = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580, 300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  player = createSprite(200, 505, 20, 50);
  player.addImage(ironMan);
  player.scale = 0.3;
}

function draw() {
  if (keyDown("up")) {
    player.velocityY = -10;
  }
  if (keyDown("left")) {
    player.X = player.X - 5;
  }
  if (keyDown("right")) {
    player.X = player.X + 5;
  }
  player.velocityY = player.velocityY + 0.5;


  drawSprites();

}

