
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

// for the variable
var tree , stone , ground , launcher;
var mangoes1 , mangoes2 , mangoes3 , mangoes4 , mangoes5 , mangoes6 , mangoes7 , mangoes8 , mangoes9 , mangoes10;
var world,Boy;
var launchingForce = 100;

function preload()
{
	Boy = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1360,620);


	engine = Engine.create();
	world = engine.world;

	//Create the objects Here.
	stone = new ball(240,425,30)
	// for the mangoes
	mangoes1 = new Mangos(1105,105,30)
	mangoes2 = new Mangos(1175,135,30)
	mangoes3 = new Mangos(1015,145,30)
	mangoes4 = new Mangos(1005,235,30)
	mangoes5 = new Mangos(1105,75,30)
	mangoes6 = new Mangos(1005,235,30)
	mangoes7 = new Mangos(905,235,30)
	mangoes8 = new Mangos(1140,155,30)
	mangoes9 = new Mangos(1105,230,40)
	mangoes10 = new Mangos(1205,205,40)
	// for the tree
	tree = new Tree(1055,585)
	// for the Grouns
	ground = new Base(width/2,600,width,20)
	// for the launcher ti be activated
	launcher = new launch(stone.body,{x:235,y:420})

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
		textSize(25);
		text("Press the 'Space' to Restart The game",60,60)
	image(boy,200,340,200,300);
	// for the display of the mangoes
	mangoes1.display();
	mangoes2.display();
	mangoes3.display();
	mangoes4.display();
	mangoes5.display();
	mangoes6.display();
	mangoes7.display();
	mangoes8.display();
	mangoes9.display();
	mangoes10.display();

	// for the display of the Stone
	stone.display();

	// for the display of the Tree
	tree.display();

	// for the display of the launcher
	launcher.display();

	//for the detect Collison
	detectollision(stone,mango1);
    detectollision(stone,mango2);
    detectollision(stone,mango3);
    detectollision(stone,mango4);
    detectollision(stone,mango5);
    detectollision(stone,mango6);
    detectollision(stone,mango7);
    detectollision(stone,mango8);
    detectollision(stone,mango9);
    detectollision(stone,mango10); 


  drawSprites();
 
}


function mouseDragged()
{
	Matter.Body.setPosition(mouse.body ,{x:mouseX, y:mouseY})

}

function mouseReleased(){
	launch.fly();
}
function keyPressed() {
	if (keyCode === 74 ) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launch.attach(stone.body);
	}
  }

  function detectollision(stone,mango){
	
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
		if(distance<=mango.r+stone.r)
	  {
		
		  Matter.Body.setStatic(mango.body,false);
	  }
  
	}



