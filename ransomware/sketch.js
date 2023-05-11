let fontsize = 40;
let input;
let img;
let imgHover;
let vel;
let pos;

let isHoveringButton = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  textAlign(CENTER, CENTER);
  input = createInput();
  input.position(windowWidth/2-85,windowHeight/2+175);
  
  img = createImg("https://cdn.discordapp.com/attachments/609153887273746434/1105163346895962132/image.png", "test");
  imgHover = createImg('https://cdn.discordapp.com/attachments/609153887273746434/1105166387984482385/hover.png', "hovering");
}

function draw() {
  background(255,0,0);
  if (isHoveringButton) {
    image(imgHover, windowWidth/2-47, 50);
  } else {
    image(img, windowWidth/2-47, 50);
  }

  messages(windowWidth/2,windowHeight/2);

  img.mouseOver(() => { isHoveringButton = true; });
  img.mouseOut(() => { isHoveringButton = false; });
  
}

function messages(x,y){
  fill(255);
  textSize(fontsize);
  textFont('arial');
  text('Woops! Your files have been encrypted!', x, y);
  
  messagesInside(windowWidth/2,windowHeight/2);
}

function messagesInside(x,y){
  //createCanvas(320,240);
  //background(255);
  fill(255);
  textSize(25);
  textFont('serif');
  text('Your important files have been encrypted.',x,y+50);
  text('Unfortunately, our payment method is not working.',x,y+75);
  text('Do not enter your credit card information,',x,y+100);
  text('our last guy who worked on this forgot to put',x,y+125);
  text('a \'send\' button, deployed it, and left.',x,y+150);
}