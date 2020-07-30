class Polygons {

    constructor(x, y, sides, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.body = Bodies.polygon(this.x, this.y, this.sides, this.radius,{isStatic: false});
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;

        push();
        translate(this.x, this.y);
        rotate(angle);
        polygon(0, 0, this.radius, this.sides);
        pop();

    }
}