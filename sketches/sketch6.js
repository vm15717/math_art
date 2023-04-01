function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(250);
    let space = 20
    let size = 10
    c = 0
    for (y = 0; y <width + 50; y += space){
        c = (c + 1) % 10
      for (x = 0; x < width + 50; x += space){
        stroke(random(0,255), random(0,255), random(0,255));
        //strokeWeight(4)
        line(x + c, y, x + size + c, y)
      }
    }
    d = 1
    for (x = 0; x <width + 50; x += space){
        d = (d + 1) % 10
      for (y = 0; y < width + 50; y += space){
        stroke(random(0,255), random(0,255), random(0,255));
        //strokeWeight(4)
        line(x, y + d, x, y + size + d)
      }
    }
  }