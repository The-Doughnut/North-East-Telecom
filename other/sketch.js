let bg;
let buttonBlock;
let buttonChirp;
let buttonFar;
let buttonMall;
let buttonMellohi;
let buttonSubwoofer;
let buttonWait;

let blockSong;
let chirpSong;
let farSong;
let mallSong;
let mellohiSong;
let subwooferSong;
let waitSong;

function preload(){
	//load image
	bg = loadImage('https://cdn.discordapp.com/attachments/609153887273746434/1106423002624692224/a3390257927_10.jpg');
	
	//load all the audio
	blockSong = loadSound('https://the-doughnut.github.io/North-East-Telecom/other/blocks.mp3');
	chirpSong = loadSound('https://the-doughnut.github.io/North-East-Telecom/other/chirp.mp3');
    farSong= loadSound('https://the-doughnut.github.io/North-East-Telecom/other/far.mp3');
    mallSong= loadSound('https://the-doughnut.github.io/North-East-Telecom/other/mall.mp3');
    mellohiSong= loadSound('https://the-doughnut.github.io/North-East-Telecom/other/mellohi.mp3');
    subwooferSong= loadSound('https://the-doughnut.github.io/North-East-Telecom/other/Subwoofer Lullaby.mp3');
    waitSong= loadSound('https://the-doughnut.github.io/North-East-Telecom/other/wait.mp3');
}

function setup() {
  
  createCanvas(720, 720);
  
  //buttons for music playback
  buttonBlock = createButton('Blocks');
  buttonBlock.position(25,25);
  buttonBlock.mousePressed(playBlock);
  
  buttonChirp = createButton('Chirp');
  buttonChirp.position(25,50);
  buttonChirp.mousePressed(playChirp);
  
  buttonFar = createButton('Far');
  buttonFar.position(25,75);
  buttonFar.mousePressed(playFar);
  
  buttonMall = createButton('Mall');
  buttonMall.position(25,100);
  buttonMall.mousePressed(playMall);
  
  buttonMellohi = createButton('Mellohi');
  buttonMellohi.position(25,125);
  buttonMellohi.mousePressed(playMellohi);
  
  buttonSubwoofer = createButton('Subwoofer');
  buttonSubwoofer.position(25,150);
  buttonSubwoofer.mousePressed(playSubwoofer);
  
  buttonWait = createButton('Wait');
  buttonWait.position(25,175);
  buttonWait.mousePressed(playWait);
}

function draw() {
	background(bg);

	fill(255, 0, 0);
	textSize(100);
	text('Nostalgia', 100, 350);
	text('Room', 100, 450);
}

//play audio
function playBlock(){
	if (blockSong.isPlaying()||chirpSong.isPlaying()||farSong.isPlaying()||mallSong.isPlaying()||mellohiSong.isPlaying()||subwooferSong.isPlaying()||waitSong.isPlaying()) {
    blockSong.pause();
	chirpSong.pause();
	farSong.pause();
	mallSong.pause();
	mellohiSong.pause();
	subwooferSong.pause();
	waitSong.pause();
	
	blockSong.play();
  } else {
	blockSong.play();
  }
}

function playChirp(){
	if(blockSong.isPlaying()||chirpSong.isPlaying()||farSong.isPlaying()||mallSong.isPlaying()||mellohiSong.isPlaying()||subwooferSong.isPlaying()||waitSong.isPlaying()){
		blockSong.pause();
		chirpSong.pause();
		farSong.pause();
		mallSong.pause();
		mellohiSong.pause();
		subwooferSong.pause();
		waitSong.pause();
		
		chirpSong.play();
	}
	else{
		chirpSong.play();
	}
}

function playFar(){
	if(blockSong.isPlaying()||chirpSong.isPlaying()||farSong.isPlaying()||mallSong.isPlaying()||mellohiSong.isPlaying()||subwooferSong.isPlaying()||waitSong.isPlaying()){
		blockSong.pause();
		chirpSong.pause();
		farSong.pause();
		mallSong.pause();
		mellohiSong.pause();
		subwooferSong.pause();
		waitSong.pause();
		
		farSong.play();
	}
	else{
		farSong.play();
	}
}
function playMall(){
	if(blockSong.isPlaying()||chirpSong.isPlaying()||farSong.isPlaying()||mallSong.isPlaying()||mellohiSong.isPlaying()||subwooferSong.isPlaying()||waitSong.isPlaying()){
		blockSong.pause();
		chirpSong.pause();
		farSong.pause();
		mallSong.pause();
		mellohiSong.pause();
		subwooferSong.pause();
		waitSong.pause();
		
		mallSong.play();
	}
	else{
		mallSong.play();
	}
}
function playMellohi(){
	if(blockSong.isPlaying()||chirpSong.isPlaying()||farSong.isPlaying()||mallSong.isPlaying()||mellohiSong.isPlaying()||subwooferSong.isPlaying()||waitSong.isPlaying()){
		blockSong.pause();
		chirpSong.pause();
		farSong.pause();
		mallSong.pause();
		mellohiSong.pause();
		subwooferSong.pause();
		waitSong.pause();
		
		mellohiSong.play();
	}
	else{
		mellohiSong.play();
	}
}
function playSubwoofer(){
	if(blockSong.isPlaying()||chirpSong.isPlaying()||farSong.isPlaying()||mallSong.isPlaying()||mellohiSong.isPlaying()||subwooferSong.isPlaying()||waitSong.isPlaying()){
		blockSong.pause();
		chirpSong.pause();
		farSong.pause();
		mallSong.pause();
		mellohiSong.pause();
		subwooferSong.pause();
		waitSong.pause();
		
		subwooferSong.play();
	}
	else{
		subwooferSong.play();
	}
}
function playWait(){
	if(blockSong.isPlaying()||chirpSong.isPlaying()||farSong.isPlaying()||mallSong.isPlaying()||mellohiSong.isPlaying()||subwooferSong.isPlaying()||waitSong.isPlaying()){
		blockSong.pause();
		chirpSong.pause();
		farSong.pause();
		mallSong.pause();
		mellohiSong.pause();
		subwooferSong.pause();
		waitSong.pause();
		
		waitSong.play();
	}
	else{
		waitSong.play();
	}
}