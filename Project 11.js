var ship_sailing;
var sea ;
var ship;
//to load animation
function preload(){
  ship_running=loadAnimation("ship-1.png");
  sea_image=loadImage("sea.png");
}

function setup(){
  background("white")
  //to create sea
  sea=createSprite(500,200,20,20)

  //to add image to sea
  sea.addAnimation("image",sea_image);

  //to give size to sea
  sea.scale=0.5;

  //to move sea in horizontal direction
 sea.velocityX=-10;

 //to create ship
 ship=createSprite(200,250,20,20);

 //to add image to ship
 ship.addAnimation("running",ship_running);

 ship.scale=0.2;
 ship.x=100;
}

function draw(){
  if(sea.x > 400){
    sea.x=0;
  }

  //draw all sprites
  drawSprites();
}