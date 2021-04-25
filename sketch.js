

var ship;
var flowers = [],flo=[],fl=[],f=[],fw=[];
var drops = [];
var score=0,re=50;
var time=50

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
   createCanvas(900,600)
   engine = Engine.create();
  ship = new Ship();
  //1
  for (var i = 0; i < 6; i++) {
    flowers[i] = new Flower(i*80+80, 60);
  }
  //2
  for (var a= 0; a < 6; a++) {
   flo[a] = new Flower(a*80+80, 150);
 }
 //3
 for (var b= 0; b < 6; b++) {
   fl[b] = new Flower(b*80+80, 240);
 }
 //4
 for (var c= 0; c < 6; c++) {
   f[c] = new Flower(c*80+80, 320);
 }
 //5
 for (var d= 0; d< 6; d++) {
   fw[d] = new Flower(d*80+80, 410);
 }
 

}

function draw() {
    background(0)
   Engine.update(engine);
  ship.show();
  ship.move();

  fill ("white")
  textSize(50)
  text ("destroy the balls by pressing space",10,150)
  if(frameCount%40==0&&score<30&&time!=0){
     time--
  }

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])&&(re!=0)) {
        flowers[j].grow();
        drops[i].evaporate();
        score+=1
      }
    }
    for (var j = 0; j < flo.length; j++) {
      if (drops[i].hits(flo[j])&&(re!=0)) {
        flo[j].grow();
        drops[i].evaporate();
        score+=1
      }
    }

    for (var j = 0; j < fl.length; j++) {
      if (drops[i].hits(fl[j])&&(re!=0)) {
        fl[j].grow();
        drops[i].evaporate();
        score+=1
      }
    }
    for (var j = 0; j < f.length; j++) {
      if (drops[i].hits(f[j])&&(re!=0)) {
        f[j].grow();
        drops[i].evaporate();
        score+=1
      }
    }
  
    for (var j = 0; j < fw.length; j++) {
      if (drops[i].hits(fw[j])) {
        fw[j].grow();
        drops[i].evaporate();
        score+=1
      }
    }
  
   }

  var edge = false;
  //1st row
  for (var i = 0; i < flowers.length; i++) {
    flowers[i].show();
    flowers[i].move();
    if (flowers[i].x > width || flowers[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < flowers.length; i++) {
      flowers[i].shiftDown();
    }
  }

  for (var i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }

   for (var i = flowers.length-1; i >= 0; i--) {
      if (flowers[i].toDelete) {
        flowers.splice(i, 1);
      }
    }

    //2nd row
    for (var i = 0; i < flo.length; i++) {
      flo[i].show();
      flo[i].move();
      if (flo[i].x > width || flo[i].x < 0) {
        edge = true;
      }
    }

    if (edge) {
      for (var i = 0; i < flo.length; i++) {
        flo[i].shiftDown();
      }
    }

    for (var i = flo.length-1; i >= 0; i--) {
      if (flo[i].toDelete) {
        flo.splice(i, 1);
      }
    }

    //3rd row
  
    for (var i = 0; i < fl.length; i++) {
      fl[i].show();
      fl[i].move();
      if (fl[i].x > width || fl[i].x < 0) {
        edge = true;
      }
    }

    if (edge) {
      for (var i = 0; i < fl.length; i++) {
        fl[i].shiftDown();
      }
    }

    for (var i = fl.length-1; i >= 0; i--) {
      if (fl[i].toDelete) {
        fl.splice(i, 1);
      }
    }

    //4th row 
    for (var i = 0; i < f.length; i++) {
      f[i].show();
      f[i].move();
      if (f[i].x > width || f[i].x < 0) {
        edge = true;
      }
    }

    if (edge) {
      for (var i = 0; i < f.length; i++) {
        f[i].shiftDown();
      }
    }

    for (var i = f.length-1; i >= 0; i--) {
      if (f[i].toDelete) {
        f.splice(i, 1);
      }
    }

   //5th row
   for (var i = 0; i < fw.length; i++) {
      fw[i].show();
      fw[i].move();
      if (fw[i].x > width || fw[i].x < 0) {
        edge = true;
      }
    }

    if (edge) {
      for (var i = 0; i < fw.length; i++) {
        fw[i].shiftDown();
      }
    }

    for (var i = fw.length-1; i >= 0; i--) {
      if (fw[i].toDelete) {
        fw.splice(i, 1);
      }
    }

    
  
    if(score>=30&&re>0){
      background("black")
       fill("green")
       textSize(50)
       text("YOU WON!👍🏻👍🏻",200,300)
    }
    if(re<=0&&score<30||time<=0)
    {
      
       background("black")
       textSize(50)
       fill("red")
       text("YOU LOSE!😥😭",200,300)
      
    }

  
    fill ("white")
    textSize(50)
  text ("score:"+score,10,50)
  text(time,10,580)
  text ("remaining:"+re,500,50)
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' '&& re>0&&score<30) {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
    re-=1
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
