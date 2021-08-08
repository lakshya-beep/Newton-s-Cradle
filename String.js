class String {
    constructor(body1,body2,offsetx,offsety){

        this.offsetx = offsetx;
        this.offsety = offsety;
        
var op = {
    bodyA: body1,
    bodyB: body2,
    pointB : {x: this.offsetX, y: this.offsety}
}

this.rope=Constraint.create(op);
World.add(world, this.rope);


}

display(){    
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    stroke("white");
    strokeWeight(3);

    var onex = pointA.x;
    var oney = pointA.y;

    var twox = pointB.x+ this.offsetX;
    var twoy = pointB.x+ this.offsety;

   line(onex,oney,twox,twoy);
}
 }
