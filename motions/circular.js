var radius = 150;
var angle = 0;
var speed = 0.01;
var centerX = 300;
var centerY = 300;

function setup() { 
  createCanvas(600, 600);
}

function draw() { 
  background(255);
  
  ellipse(centerX, centerY, 10, 10);
  
  var x = centerX + radius * cos(angle);
	var y = centerY + radius * sin(angle);
  ellipse(x, y, 50, 50);

  angle = angle + speed;
}