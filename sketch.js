var red1,blue1,green1,arrow1,bow1,ground1;
var red2,blue2,green2,arrow2,bow2,ground2;
var edges,ballon1,score=0;
var arrowGroup,balloonGroup;
var redB,blueB,greenB;
function preload(){ 
red2 = loadImage("red_balloon.png");
blue2 = loadImage("blue_balloon.png");
green2 = loadImage("green_balloon.png");
arrow2 = loadImage("arrow.png");
bow2 = loadImage("bow.png");
ground2 = loadImage("background.png");
}

function setup() {
  createCanvas(600, 500);
  
 ground1 = createSprite(300,230,10,10);
 ground1.addAnimation("ground",ground2);
 ground1.scale=1.493;
  
 bow1 = createSprite(550,247,10,10);
 bow1.addAnimation("bow",bow2);
 bow1.scale=1.5;

 edges = createEdgeSprites();
  
 arrowGroup = new Group();
 redB = new Group();
blueB = new Group();
greenB = new Group();
}
    
function draw() { 
  background("black");
  
  Balloon();
  
   bow1.y=World.mouseY;
  if(keyWentUp("space")){
    arrow1 = createSprite(530,250,10,10);
    arrow1.addImage("arrow",arrow2);
   
    arrow1.setCollider("rectangle",0,0,250,30);
    arrow1.scale=0.45;
    arrow1.velocityX=-10;
    arrow1.y=bow1.y;
    arrow1.lifetime=60;
    arrowGroup.add(arrow1);
  }
  
   if(arrowGroup.isTouching(redB)){
     redB.destroyEach();
     arrowGroup.destroyEach();
     score=score+1;
  }
  
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  if(arrowGroup.isTouching(greenB)){
     greenB.destroyEach();
     arrowGroup.destroyEach();
     score=score+1;
  }
  drawSprites();
    
  textSize(20);
  fill(50);
  text("Score = "+score,10,20);

}

function Balloon(){
    
  if(frameCount%50===0){
  balloon1=createSprite(50,410,10,10);
  var A= Math.round(random(1,3));
  
  switch(A){
      
    case 1: redBalloon();
      break;
    case 2: blueBalloon();
      break;
    case 3: greenBalloon();
      break;
    default: break;
  }
  }
}
function redBalloon(){
 
  //if(frameCount%50===0){
  red1=createSprite(50,410,10,10);
  red1.addImage("redballoon",red2);
    
   red1.setCollider("rectangle",0,-50,250,700);
   red1.scale=0.15;
   red1.y=Math.round(random(0,600));
   red1.velocityX=6;
   red1.lifetime=100;
   redB.add(red1);
 // }
}
function blueBalloon(){
 
 // if(frameCount%50===0){
  blue1=createSprite(50,410,10,10);
  blue1.addImage("blueballoon",blue2);
    
   blue1.setCollider("rectangle",0,0,250,600);
   blue1.scale=0.15;
   blue1.y=Math.round(random(0,600));
   blue1.velocityX=6;
   blue1.lifetime=100;
  blueB.add(blue1);
//}
}
function greenBalloon(){

  //if(frameCount%50===0){
  green1=createSprite(50,410,10,10);
  green1.addImage("greenballoon",green2);
    
   green1.setCollider("rectangle",0,-100,250,700);
   green1.scale=0.15;
   green1.y=Math.round(random(0,600));
   green1.velocityX=6;
   green1.lifetime=100;
   greenB.add(green1);
 // }
}