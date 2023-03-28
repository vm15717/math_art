let rect_heights = [];
let array_len = 0;
let space = 20;
function setup() {
    createCanvas(400, 400);
    space = 20;
    for (i = 0; i < width; i += space){
        rheight = random(50, 350) 
        rect_heights[array_len] = height - rheight - 50;
        array_len += 1
    }
    //noLoop();
  }

function draw(){
    drawinitialise();
    merge_sort();  
}
function drawinitialise(){
    clear();
    background = 250;
    j = 0
    for (i = 0; i < width; i += space){
        strokeWeight(2);
        rect(0 + i, height - rect_heights[j], space, rect_heights[j]);
        j += 1;
        //rect_heights[i] = height - rheight - 50; 
    }
}

function merge_sort(){
}
