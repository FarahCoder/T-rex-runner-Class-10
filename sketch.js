var trex, trex_running, edges;
var groundImage, ground;

// uploading the animations to code
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite (200,180,400,20);
ground.x=ground.width/2;
ground.addImage (groundImage);
}


function draw(){
  //set background color  
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  // making the ground move
  ground.velocityX = -5;
// to make it infinite
if (ground.x < 0) {
  ground.x= ground.width/2
}
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //gravity: Trex falling back down
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground);
  drawSprites();
}