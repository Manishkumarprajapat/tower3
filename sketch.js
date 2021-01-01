const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;
const body=Matter.Body;
var engine, world;
function preload() {
	polygon_img = loadImage("polygon.png");
}
 function setup() {
	createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(100, 395, 1700, 20);
  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(750, 250, 250, 10);

  //level 1.1
  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);
  //level 1.2
  block8 = new Block(330, 265, 30, 40);
  block9 = new Block(360, 265, 30, 40);
  block10 = new Block(390, 265, 30, 40);
  block11 = new Block(420, 265, 30, 40);
  block12 = new Block(450, 265, 30, 40);
  //level 1.3
  block13 = new Block(360, 255, 30, 40);
  block14 = new Block(390, 255, 30, 40);
  block15 = new Block(420, 255, 30, 40);
  //level 1.4
  block16 = new Block(390, 235, 30, 40);

  //level 2.1
  block17 = new Block(660, 200, 30, 30);
  block18 = new Block(690, 200, 30, 30);
  block19 = new Block(720, 200, 30, 30);
  block20 = new Block(750, 200, 30, 30);
  block21 = new Block(780, 200, 30, 30);
  block22 = new Block(810, 200, 30, 30);
  block23 = new Block(840, 200, 30, 30);
  //level 2.2
  block24 = new Block(690, 210, 30, 30);
  block25 = new Block(720, 210, 30, 30);
  block26 = new Block(750, 210, 30, 30);
  block27 = new Block(780, 210, 30, 30);
  block28 = new Block(810, 210, 30, 30);
  //level 2.3
  block29 = new Block(720, 220, 30, 30);
  block30 = new Block(750, 220, 30, 30);
  block31 = new Block(780, 220, 30, 30);
  //level 2.4
  block32 = new Block(750, 230, 30, 30);

  //ball holder with slings
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingShot = new Slingshot(this.ball, {
    x: 100,
    y: 200
  });
 }
 function draw() {
	background("green");
	Engine.update(engine);
	ground.display();
	stand1.display();
	stand2.display();
	
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();
	block17.display();
	block18.display();
	block19.display();
	block20.display();
	block21.display();
	block22.display();

	block23.display();
	block24.display();
	block25.display();
	block26.display();
	block27.display();
	block28.display();
	block29.display();
	block30.display();
	block31.display();
	block32.display();
	
	imageMode(CENTER)
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);
  slingShot.display();

 }
 function mouseDragged() 
 { Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY }); } 
 function mouseReleased() 
 { 
	 slingShot.fly();
 }
 function keyPressed(){
    if(keyCode === 32){
	   slingShot.attach(this.ball);
	}
}
async function getBackgroundImg()
{ var response = await fetch("http://worldclockapi.com/api/json/est/now");
 var responseJSON = await response.json(); 
 var datetime = responseJSON.currentDateTime
  var hour = datetime.slice(17,19)
   console.log(hour); 
   if(hour>=06 && hour<=18)
   { background("yellow")
 } 
   else{}
    background("black")
}
