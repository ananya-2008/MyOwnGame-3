

class Drop {
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;}

   show() {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  evaporate() {
    this.toDelete = true;
  }

  hits(flower) {
    var d = dist(this.x, this.y, flower.x, flower.y);
    if (d < this.r + flower.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.y = this.y - 5;
  }

}
