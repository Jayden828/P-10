var seaImg, boatImg;
var sea, boat;

function preload(){
  seaImg = loadImage("sea.png");
  boatImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
createCanvas(400,400);

sea = createSprite(200,200,400,400);
sea.addImage(seaImg);
sea.velocityX = -2;

boat = createSprite(200,250,50,50);
boat.addAnimation("moving", boatImg);
boat.scale = 0.3

}



function draw() {
background("blue")

if(sea.x < 0){
  sea.x = width/2
}
 drawSprites()
}