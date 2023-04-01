function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(250);
    let space = 10
    let size = 10
    for (x = 0; x <width + 50; x +=space){
      for (y = 0; y < width + 50; y += space){
        c = random(0,4);
        stroke(random(0,255), random(0,255), random(0,255));
        //strokeWeight(4);
        ellipse(x + 5, y + 5, size, size)
      }
    }
  }