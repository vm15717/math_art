let rect_heights = [];
let array_len = 0;
let space = 10;
let w = 0;
let gap = 5;
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
    shell_sort();
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

function shell_sort(){
    if (w < array_len && gap >= 1){
        curr_val = rect_heights[w]
        curr_idx = w
        t = 0
        j = w - 1
        while((j > -1) && (curr_val < rect_heights[j])){
            rect_heights[j + gap] = rect_heights[j]
            j--;
        }
        rect_heights[j+1] = curr_val  
        gap = gap - 2
    }
    else{
        noLoop();
    }
    w++;
}