
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var ground1
var dustbin1,dustbin2,dustbin3,dustibinImage,bin4


function preload(){

dustbinImage = loadImage("sprites/dustbingreen.png");


}


function setup() {
	createCanvas(1700, 500);
    engine = Engine.create();
	world = engine.world;
	paper1 = new paper(100,100,70)
    ground1 = new ground(600,400,2500,20)
	dustbin1 = new bin(1070,270,20,230)
	dustbin2 = new bin(1230,270,20,230)
	dustbin3 = new bin(1150,380,190,20)
	bin4 = createSprite (1152,260,40,50)
	bin4.addImage (dustbinImage)
	bin4.scale = 0.8

	

	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY)

  paper1.display();
 ground1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:205,y:-205});
	}
}


