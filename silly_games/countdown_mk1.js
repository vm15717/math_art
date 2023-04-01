let rect_size = 40
function setup(){
    createCanvas(400,400);
}

function draw(){
    // Top Row
    for (i = 0; i < 4;i += 1){
        rect(height/2 - (2 -i)*rect_size, width/2 - 2*rect_size, rect_size, rect_size)   
    }
    // Middle Row
    for (i = 0; i < 7;i += 1){
        rect(height/2 - (3.5 -i)*rect_size, width/2 + 10 - rect_size, rect_size, rect_size)   
    }
    // Middle Row
    for (i = 0; i < 7;i += 1){
        rect(height/2 - (3.5 -i)*rect_size, width/2 + rect_size - 20, rect_size, rect_size)   
    }
    // Bottom Row
    for (i = 0; i < 6;i += 1){
        rect(height/2 - (3 -i)*rect_size, width/2 + 2*rect_size - 10, rect_size, rect_size)   
    }
}