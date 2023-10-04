let pemain1, pemain2
let loncat 
let bg
let fh

function preload() {
  soundFormats('mp3')
  loncat = loadSound ('loncat.mp3')
  bg = loadImage ('gambar.jpeg')
  fh = loadSound ('finish.mp3')
  pemain1 = loadImage ('pemain1.png')
  pemain2 = loadImage ('pemain2.png')
  
}

function setup() {
  createCanvas(600, 400);
  
  pemain1 = new Pemain (-45, 220, pemain1)
  pemain2 = new Pemain (-30, 120, pemain2)
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
