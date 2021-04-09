var fixedRect, movingRect;
var object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX=5;
  fixedRect.debug = false;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX=-5;
  movingRect.debug = false;

  object3=createSprite(250,200,80,30);
object3.shapeColor="blue";
object3.velocityX=5;


}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,object3);
  drawSprites();
}
