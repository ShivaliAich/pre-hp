//this.body = creatSprite();
//display function not needed
//this class is for good NPC
class Playing{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.7,
        }
        //this.color = rgb(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("images/luna.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}