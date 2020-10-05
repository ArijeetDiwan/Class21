var gameObject1,gameObject2,fixedRect,movingRect;



function setup() {
    createCanvas(1200,800);
   fixedRect=createSprite(400,400,45,83);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  
   movingRect=createSprite(400,200,80,40);
   movingRect.shapeColor="green";
   movingRect.debug=true;
   gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="white";

  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="White";
  movingRect.velocityY = +5;
  fixedRect.velocityY = -5;
  }
  
  function draw() {
    background(0);
  /*  movingRect.x=World.mouseX;
   movingRect.y=World.mouseY;*/

   bounceoff(movingRect,fixedRect);
   
  if(isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor="red";
    movingRect.shapeColor="red";

  }else{
    gameObject1.shapeColor="white";
    movingRect.shapeColor="green";
  }
/*
  if(isTouching(movingRect,gameObject2)){
    gameObject2.shapeColor="red";
    movingRect.shapeColor="red";

  }else{
    gameObject2.shapeColor="white";
    movingRect.shapeColor="green";
  }*/
    drawSprites();
  }

 