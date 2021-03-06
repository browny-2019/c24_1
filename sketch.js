
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	background(0,0,0)
	var options={
		
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	Matter.bodies.circle(100,780,50,[options])

	box1Sprite = createSprite(width/2, 650,200,20); 
	box1Sprite.shapeColor="white";
	Engine.run(engine);
	box2Sprite = createSprite(width/1.6,610,20,100);
	box2Sprite.shapeColor="white";
	box3Sprite = createSprite(width/2.75,610,20,100);
	box3Sprite.shapeColor="white";
  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



