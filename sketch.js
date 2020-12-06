var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1body,wall1sprite;
var wall2body,wall2sprite;
var wall3body,wall3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
 helicopterIMG=loadImage("helicopter.png")
 packageIMG=loadImage("package.png")
}

function setup() {
 createCanvas(1600, 800);
 rectMode(CENTER);

 packageSprite=createSprite(width/2, 80, 10,10);
 packageSprite.addImage(packageIMG);
 packageSprite.scale=0.2;

 helicopterSprite=createSprite(width/2, 200, 10,10);
 helicopterSprite.addImage(helicopterIMG);
 helicopterSprite.scale=0.6;

 groundSprite=createSprite(width/2, height-35, width,10);
 groundSprite.shapeColor=color(255);

 wall1sprite=createSprite(260, 550, 20,50);
 wall1sprite.shapeColor=color(255,0,0);

 wall2sprite=createSprite(180,200,20,50);
 wall2sprite.shapeColor=color(255,0,0);

 wall3sprite=createSprite(825,750,330,20);
 wall3sprite.shapeColor=color(255,0,0);
 
 engine = Engine.create();
 world = engine.world;

 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
 World.add(world, packageBody);
	
 ground = Bodies.rectangle(width/2, 750, width, 10 , {isStatic:true} );
 World.add(world, ground);

 wall1body=Bodies.rectangle(650, 735, 20, 50 ,{isStatic:true});
 World.add(world,wall1body);

 wall2body=Bodies.rectangle(1000, 735, 20, 50 ,{isStatic:true});
 World.add(world,wall2body);

 wall3body=Bodies.rectangle(825, 750, 330, 20 ,{isStatic:true});
 World.add(world,wall3body);

 Engine.run(engine); 
}

function draw(){
 rectMode(CENTER);
 background(0);
 packageSprite.x= packageBody.position.x; 
 packageSprite.y= packageBody.position.y;
 wall1sprite.y=wall1body.position.y;
 wall1sprite.x=wall1body.position.x;
 wall2sprite.y=wall2body.position.y;
 wall2sprite.x=wall2body.position.x;
 wall3sprite.y=wall3body.position.y;
 wall3sprite.x=wall3body.position.x;
 drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false);
 }
}



