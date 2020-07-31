const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1, base2;
var poly;
var polyConstraint;
var ground;
var state;

var engine;
var world;

var box1, box2, box3, box4, box5, box6,
  box7, box8, box9, box10, box11, box12, box13,
  box14, box15, box16;

var box17, box18, box19, box20, box21, box22,
 box23, box24, box25, box26, box27, box28, box29, 
 box30, box31, box32;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1200, 500);

  state = "set";

  ground = Bodies.rectangle(750, 500, 1200, 20, { isStatic: true });
  World.add(world, ground);

  base1 = new Base(500, 400, 300, 20);
  base2 = new Base(1000, 250, 300, 20);

  poly = new Polygons(150, 300);
  polyConstraint = new SlingShot(poly.body, { x: 150, y: 300 });

  box1  = new Box(400, 365, "red");
  box2  = new Box(430, 365, "red");
  box3  = new Box(460, 365, "red");
  box4  = new Box(490, 365, "red");
  box5  = new Box(520, 365, "red");
  box6  = new Box(550, 365, "red");
  box7  = new Box(580, 365, "red");

  box8  = new Box(430, 315, "blue");
  box9  = new Box(460, 315, "blue");
  box10 = new Box(490, 315, "blue");
  box11 = new Box(520, 315, "blue");
  box12 = new Box(550, 315, "blue");

  box13 = new Box(460, 265, "green");
  box14 = new Box(490, 265, "green");
  box15 = new Box(520, 265, "green");

  box16 = new Box(490, 220, "white");

  box17 = new Box(930, 215, "red");
  box18 = new Box(960, 215, "red");
  box19 = new Box(990, 215, "red");
  box20 = new Box(1020, 215, "red");
  box21 = new Box(1050, 215, "red");
  box22 = new Box(1080, 215, "red");
  box23 = new Box(1110, 215, "red");

  box24 = new Box(960, 165, "blue");
  box25 = new Box(990, 165, "blue");
  box26 = new Box(1020, 165, "blue");
  box27 = new Box(1050, 165, "blue");
  box28 = new Box(1080, 165, "blue");

  box29 = new Box(990, 115, "green");
  box30 = new Box(1020, 115, "green");
  box31 = new Box(1050, 115, "green");

  box32 = new Box(1020, 70, "white");

  Engine.run(engine);

}

function draw() {
  background(200);

  base1.display();
  base2.display();

  console.log(box1.body.speed)

  poly.display();
  polyConstraint.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();

  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();

  box32.display();

  drawSprites();

  push();
  fill("purple");
  stroke("blue");
  strokeWeight(2);
  textSize(20);
  text("WHEN AWAY, PRESS SPACE TO GET BACK THE POLYGON", 150, 50);
  pop();

  Engine.update(engine);
}

function mouseDragged() {
  if (state === "set") {
    Matter.Body.setPosition(poly.body, { x: mouseX, y: mouseY });
  }
}

function mouseReleased() {
  polyConstraint.fly();
  state = "launched";
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(poly.body, { x: 150, y: 300 })
    polyConstraint.attach(poly.body);
    state = "set";
  }
}