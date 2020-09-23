class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1.2,
          'density':0.2,
          isStatic : true



      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
      Matter.Body.setAngle(this.body, angle)
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER);
      fill(255);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  