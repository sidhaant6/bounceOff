var fixedRect, movingRect;

function setup() {
  createCanvas(1200,600);
  fixedRect= createSprite(400, 200, 50, 50);
  movingRect= createSprite(600, 200, 60, 50);
  fixedRect.velocityX= 5;
  movingRect.velocityX=-5;


  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}
function draw() {
  background(0,0,0);  
  /*movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;*/

bounceOff(movingRect,fixedRect);

  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2     
    && object2.x-object1.x<object1.width/2+object2.width/2 ){
    object2.velocityX=object2.velocityX*(-1);
    object1.velocityX=object1.velocityX*(-1);
  
  
  
  }
  
  if ( object1.y-object2.y<object1.height/2+object2.height/2 
    &&  object2.y-object1.y<object1.height/2+object2.height/2 ){
      object2.velocityY=object2.velocityY*(-1)
      object1.velocityY=object1.velocityY*(-1);
  
    }

}