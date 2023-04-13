let input1, button1, greeting1, input2, button2, greeting2;

function setup() {
  // create canvas
  createCanvas(400, 400);

  input1 = createInput();
  input1.position(200, 65);

  button1 = createButton('submit');
  button1.position(input1.x + input1.width, 65);
  button1.mousePressed();

  greeting1 = createElement('h2', 'what is name of the first person?');
  greeting1.position(150, 5);

  input2 = createInput();
  input2.position(200, 155);

  button2 = createButton('submit');
  button2.position(input2.x + input2.width, 155);
  button2.mousePressed(greet);

  greeting2 = createElement('h2', 'what is name of the second person?');
  greeting2.position(150, 85);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name1 = input1.value();
  greeting1.html('hello ' + name1 + '!');
  input1.value('');
  const name2 = input2.value();
  greeting2.html('hello ' + name2+ '!');
  input2.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), random(255), random(255));
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name1, 0, 0);
    text(name2, 0, 0)
    pop();
  }
}
