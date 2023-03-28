function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(250);
    let space = 25
    let size = 25
    for (x = 0; x <width + 50; x += space){
      for (y = 0; y < width + 50; y += space){
        //stroke(random(0,255), random(0,255), random(0,255));
        //strokeWeight(4)
        c = random(0,2)
        if (c < 1){
        colorMode(RGB);
        fill(random(0,255), random(0,255), random(0,255));
        triangle(x, y, x, y + size, x + size, y + size);
        }
        else if (c < 2){
        //colorMode(HSB);
        //fill(random(0,255), random(0,255), random(0,255));
        triangle(x + size, y + size, x + size, y, x, y);
        }
      }
    }
  }