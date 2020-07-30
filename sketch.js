const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1, base2;


function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1500,500);
  
  base1 = new Base(500, 400, 300, 20);
  base2 = new Base(1000, 250, 300, 20);
  
  poly = new Polygons(200, 400, 20, 7);
  polyConstraint = new SlingShot(poly.body, {x:200, y:400});

  Engine.run(engine);

}

function draw() {
  background(200); 
  Engine.update(engine); 

  base1.display();
  base2.display();

  poly.display();
  polyConstraint.display();

  polygon(200, 200, 50, 10);

  drawSprites();
}

function polygon(x, y, radius, npoints) {
  fill(150);
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}