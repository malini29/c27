
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var rob;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
     
	 bob1 = new bob(300,160,200,20);
    bob2= new bob(760,120,10,100);
    bob3 = new bob(870,120,200,20);
    bob4 = new bob(810,160,10,100);
    bob5 = new bob(760,120,200,20);
	ground = new Ground(760,120,200,20);
    rob = new Rope(bobObject1.body,groundObject.body,-bobDiameter*2,0);
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



