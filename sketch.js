
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const render = Matter.render;
const Constraint = Matter.Constraint;


function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

firstBob = new Bob(300,300);

holder = new Holder(250,50,700,10);

chain1 = new String(firstBob.body,holder.body,0,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

 chain1.display();
 firstBob.display();
 holder.display();
 

}



