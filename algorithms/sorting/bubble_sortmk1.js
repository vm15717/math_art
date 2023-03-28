let values = [];
let numOfRects = 100;
let rectWidth;
let n;

//Recursive Bubble Sort
function bubbleSort(arr, n) {
    // If there is no remaining iterations do nothing
    if (n <= 1) {
        return 
    }

    // Swap the elements by comparing them
    for (let j = 0; j < n - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }

    // We did one more iteration return the remaining number of iterations
    return n - 1;
}

function resetArray() {
    // Generate the values
    values = new Array(floor(width / rectWidth));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    // The number of iterations is equal to the number of values
    n = values.length;
}

function setup() {
    createCanvas(800, 300);
    rectWidth = floor(width / numOfRects);

    // Generate the values
    resetArray();
}

function draw() {
    // Define the "speed" at which we do the iterations
    frameRate(10);
    background(0);
    stroke(2);
    fill(250);

    // Show the values
    for (let i = 0; i < values.length; i++) {
        rect(i * rectWidth, height - values[i], rectWidth, values[i]);
    }

    // Make one new iteration
    n = bubbleSort(values, n);

    // If we did all the operations let's reset the array with new values
    if (n === 0) {
        resetArray();
    }
}
