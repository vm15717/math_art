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
    insertion_sort();
    //frameRate = 2;
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

function insertion_sort(){
    //for (i = 0; i < array_len; i += 1){
    if (w < array_len){
        curr_val = rect_heights[w]
        curr_idx = w
        t = 0
        for (j = w - 1; j >= 0; j -= 1){
            t = 0
             if (curr_val < rect_heights[j]){
                //curr_val = rect_heights[j]
                t = 1
                curr_idx = j
            } 
        }
        if (t == 1){
            array1 = rect_heights.slice(curr_idx, w);
            array2 = rect_heights.slice(w+1, );
            rect_heights = rect_heights.slice(0,curr_idx).concat(rect_heights[w]).concat(array1).concat(array2)   
        }    
    }
    else{
        //text('FINISHED', 10, 30);
        noLoop();
    }
    w++;
}