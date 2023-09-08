let pemain1, pemain2
let loncat 
let bg
let fh

function preload() {
  soundFormats('mp3')
  loncat = loadSound ('loncat.mp3')
  bg = loadImage ('gambar.jpeg')
  fh = loadSound ('finish.mp3')
  
}

function setup() {
  createCanvas(600, 400);
  
  pemain1 = new Pemain (200, '#65B5F5')
  pemain2 = new Pemain (height-100, '#A4D36F')
}
 
function draw() {
  background(bg);
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  
  pemain1.finish()
  pemain2.finish()

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pemain1.maju()
    loncat.play()
  }
  else if (keyCode === RIGHT_ARROW) {
    pemain2.maju()
    loncat.play()
  }
}
