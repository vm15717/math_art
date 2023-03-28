let rect_heights = [];
let array_len = 0;
let space = 10;
let w = 0;
function setup() {
    createCanvas(400, 400);
    for (i = 0; i < width; i += space){
        rheight = random(50, 350) 
        rect_heights[array_len] = height - rheight - 50;
        array_len += 1
    }
    frameRate = 30
  }

function draw(){
    background = 250;
    drawinitialise();
    selection_sort();
    //drawinitialise();
}
function drawinitialise(){
    clear();
    j = 0
    for (i = 0; i < width; i += space){
        strokeWeight(2);
        rect(0 + i, height - rect_heights[j], space, rect_heights[j]);
        j += 1;
    }
}

function selection_sort(){
    //for (i = 0; i < array_len; i += 1){
    if (w < array_len){
        min_val = rect_heights[w]
        min_idx = w
        for (j = w + 1; j < array_len; j += 1){
             if (min_val > rect_heights[j]){
                min_val = rect_heights[j]
                min_idx = j 
            }
        //drawinitialise();
        }
        //if (min_idx != i){
            temp = rect_heights[w]
            rect_heights[w] = min_val
            rect_heights[min_idx] = temp
        //}
    }
    else{
        //text('FINISHED', 10, 30);
        noLoop();
    }
    w++;
}