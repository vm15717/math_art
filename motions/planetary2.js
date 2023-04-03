var radius1 = 50;
var radius2 = 200;
var angle1 = 0;
var angle2 = 0;
var speed1 = 0.01;
var speed2 = 0.02;
var centerX = 300;
var centerY = 300;
let i = 0;
let max_i = 500;
let x2 = [];
let y2 = [];
let x1 = [];
let y1 = [];

function setup() { 
  createCanvas(600, 600);
  orbit_vals();
}

function draw() { 
  background(255);
  draw_orbits();
}

function draw_orbits(){
      //ellipse(centerX, centerY, 10, 10);
      if (i < max_i){
        //ellipse(300,300, 2*radius1, 2*radius1)
        //ellipse(x2[i], y2[i], 50, 50); 
        //ellipse(x1[i], y1[i], 10, 10);
        //for (k = 0; k < max_i; k ++){
            //let val = k / max_i * 204.0 + 51;
            //stroke(val);
        line(x1[i], y1[i], x2[i], y2[i])
        //}
      }
      else{
        //noLoop();
      }
      i++;
}

function orbit_vals(){
    for (j = 0; j < max_i; j++){
        x2[j] = centerX + radius2 * cos(angle2);
        y2[j] = centerY + radius2 * sin(angle2);
        
        x1[j] = centerX + radius1 * cos(angle1);
        y1[j] = centerY + radius1 * sin(angle1);
        angle1 = angle1 + speed1;
        angle2 = angle2 + speed2;
    }
}