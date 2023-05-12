let bg;
let buttonBlock;

let blockSong;

function setup() {
  bg = loadImage('https://cdn.discordapp.com/attachments/609153887273746434/1106423002624692224/a3390257927_10.jpg');
  createCanvas(720, 720);
  
  blockSong = loadSound('https://cdn.discordapp.com/attachments/1036502981572567070/1106425548898566204/blocks.mp3');
  
  buttonBlock = createButton('blocks');
  buttonBlock.position(25,25);
  buttonBlock.mousePressed(playBlock);
}

function draw() {
  background(bg);

}

function playBlock(){
	if (blockSong.isPlaying()) {
    blockSong.stop();
  } else {
    blockSong.play();
  }
}