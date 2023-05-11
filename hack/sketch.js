let randomNum = 0;
let y = 0;
let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomNum = 0;
}

function draw() {
  background(0);
  
  randomNum = random(9999999999999999);
  line = createElement('p',randomNum);
  line.position(x,y);

  y = y+12;
  
  if (y > 1000){
    y = 0;
    x = x+125;
  }
  if (x>1000){
    y=0;
    x=0;
  }
}