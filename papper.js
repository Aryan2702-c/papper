class papper{
    constructor(x, y,r) {
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
this.x=x
this.y=y
this.r=r

    this.body = Bodies.circle(this.x,this.y,this.r/2,options);

        World.add(world,this.body);
      }
      display(){
       var paperpos=this.body.position
    
        push();
        translate(paperpos.x,paperpos.y);
        //rotate(angle);
        rectMode(CENTER);
        fill(255,0,255);
        strokeWeight(3)
      //  rotate(this.angle);
        ellipse( 0, 0, this.r, this.r);
        pop();
        
      }
}