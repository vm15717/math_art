function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(250);
    let space = 10
    for (x = 0; x <width + 50; x +=space){
      for (y = 0; y < width + 50; y += space){
           stroke(random(0,255), random(0,255), random(0,255));
           line(x,y,x+space, y+space);
           line( 400 - x, y, 400 - x - space, y + space);
      }
    }
  }