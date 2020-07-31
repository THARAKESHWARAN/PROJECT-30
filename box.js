class Box {

  constructor(x, y, col) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 0.02
    }
    this.color = col;
    this.body = Bodies.rectangle(x, y, 30, 50, options);
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.color);
    rect(0, 0, 30, 50);
    pop();
  }
}