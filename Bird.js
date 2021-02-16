class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.trajectary = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos = [this.body.position.x, this.body.position.y];
      this.trajectary.push(pos);
    }
    for(var i = 0; i<this.trajectary.length; i++){
      image(this.image2, this.trajectary[i][0],this.trajectary[i][1]);
    }
  }
}
