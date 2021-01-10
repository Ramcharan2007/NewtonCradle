const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var string1,string2,string3,string4,string5;

function setup() 
{
	createCanvas(windowWidth/2 , windowHeight/2);
	engine = Engine.create();
	world = engine.world;

	pendulum1=new Pendulum(windowWidth/4,windowHeight/4+100,"black");
	pendulum2=new Pendulum(windowWidth/4-40,windowHeight/4+100,"black");
	pendulum3=new Pendulum(windowWidth/4-80,windowHeight/4+100,"black");
	pendulum4=new Pendulum(windowWidth/4+40,windowHeight/4+100,"black");
	pendulum5=new Pendulum(windowWidth/4+80,windowHeight/4+100,"black");

	string1=new String(pendulum1.body,{x:windowWidth/4,y:windowHeight/4-100});
	string2=new String(pendulum2.body,{x:windowWidth/4-40,y:windowHeight/4-100});
	string3=new String(pendulum3.body,{x:windowWidth/4-80,y:windowHeight/4-100});
	string4=new String(pendulum4.body,{x:windowWidth/4+40,y:windowHeight/4-100});
	string5=new String(pendulum5.body,{x:windowWidth/4+80,y:windowHeight/4-100});

	Engine.run(engine);
}


function draw() 
{
	rectMode(CENTER);
	background(0);

	string1.display();
	string2.display();
	string3.display();
	string4.display();
	string5.display();

	pendulum1.display();
	pendulum2.display();
	pendulum3.display();
	pendulum4.display();
	pendulum5.display();

	fill("white");
	text(mouseX+","+mouseY,mouseX,mouseY);
}

function mouseDragged()
{
	Body.setPosition(pendulum3.body,{x:mouseX,y:mouseY});
}



