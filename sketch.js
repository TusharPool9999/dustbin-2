const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binleft, binright, binbottom

function preload()
{
	
}

function setup() {
	createCanvas(1000,300);


	engine = Engine.create();
	world = engine.world;

	binleft = new Dustbin(750, 290, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  binleft.display();

}



