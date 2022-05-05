class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }
  display()
  {push()
  rectMode(CENTER) 
  rect(this.height,this.y)
  }
  
}
