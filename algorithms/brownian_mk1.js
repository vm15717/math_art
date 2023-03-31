let x = []
let y = []
let array_len = 500
function setup() {
    createCanvas(400, 400);
    x[0] = random(200,300)
    y[0] = random(20,300)
    for (i = 1; i <= array_len; i+= 1){
        x[i] = x[i-1] + random(-5,5)
        y[i] = y[i-1] + random(-5,5)
        x[i] = constrain(x[i], 0, width);
        y[i] = constrain(y[i], 0, height); 
    } 
    frameRate(30);
    //noLoop();
}
  
function draw() {
    background(0);
    let space = 10;
    for (i = 1; i <array_len; i+= 1){
        x[i - 1] = x[i]
        y[i - 1] = y[i]
        x[i] = constrain(x[i], 0, width);
        y[i] = constrain(y[i], 0, height); 
    }  
    x[array_len - 1] = x[array_len - 1] + random(-5, 5)
    y[array_len - 1] = y[array_len - 1] + random(-5, 5)
    //stroke(128, 64, 0);    
    for (j = 1; j <array_len; j += 1){
        let val = j / array_len * 204.0 + 51;
        stroke(val);
        line(x[j - 1],y[j - 1],x[j], y[j]);
    }
}