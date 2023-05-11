let input, button, greeting;
let wooow = 0;
let answer;

function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);
  background(255);

  input = createInput();
  input.position(20, 65);

  button = createButton('Calculate');
  button.position(input.x + input.width, 65);
  button.mousePressed(calc);

  greeting = createElement('h2', 'Enter a mathematical equasion');
  greeting.position(20, 5);
  
  answer = createElement('p','Answer will be displayed here.');
  answer.position(20,75);

  textAlign(CENTER);
  textSize(50);
}


function calc() {
  const equasion = input.value();
  greeting.html(equasion + '=');
  input.value('');
  
  wooow = parse(equasion);
  
  answer.html(wooow);

  //fills the page with numbers
  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), random(255), random(255));
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(wooow, 0, 0);
    pop();
  }
}

//transforms the equasion string into a real equasion
function parse(str) {
  return Function(`'use strict'; return (${str})`)()
}

//Enter key will calculate
function keyPressed(){
  if (keyCode === ENTER) {
    calc();
  }
}