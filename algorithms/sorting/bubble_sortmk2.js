let rect_heights = [];
let array_len = 0;
let space = 25;
function setup() {
    createCanvas(400, 400);
    for (i = 0; i < width - space - 10; i += space){
        rheight = random(0, 100) 
        rect_heights[array_len] = floor(rheight);
        array_len += 1
    }
    print(array_len)
    noLoop();
  }

const sleep = (millis) => {
    return new Promise(resolve => setTimeout(resolve, millis))
}

function draw(){
    drawinitialise();
    bubble_sort();
}
function drawinitialise(){
    clear();
    background = 250;
    j = 0
    for (i = 0; i < width - space-10; i += space){
        strokeWeight(2);
        rect(10 + i, height/2, space, space);
        text(rect_heights[j], 3.5+i+space/2, height/2 + space/2 + 5)
        j += 1;
    }
}

function bubble_sort(){
    for (i = 0; i < array_len; i += 1){
        for (j = 0; j < array_len; j += 1){
                draw_arrow(i, j)
                await(sleep(50))
             if (rect_heights[j] > rect_heights[j + 1]){
                dummy = rect_heights[j + 1]
                rect_heights[j + 1] = rect_heights[j]
                rect_heights[j] = dummy
                drawinitialise()
                await(sleep(500))
            }
        }
    }
}

function draw_arrow(i, j){
    //stroke('red');
    text('↓', 5 + i*space+space/2, height/2 - 2)
    //stroke('green');
    text('↓', 5 + j*space+space/2, height/2 - 2)
}