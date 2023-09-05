let pemain1, pemain2, pemain3

function setup() {
  createCanvas(600, 400);
  
  pemain1 = new Pemain (100, '#65B5F5')
  pemain2 = new Pemain (height-100, '#A4D36F')
  pemain3 = new Pemain (height/2, 'pink')
}
 
function draw() {
  background(220);
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  pemain3.tampilkan()
  
  pemain1.finish()
  pemain2.finish()
  pemain3.finish()
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pemain1.maju()
  }
  else if (keyCode === RIGHT_ARROW) {
    pemain2.maju()
  }
  else if (keyCode === UP_ARROW) {
    pemain3.maju()
  }
}