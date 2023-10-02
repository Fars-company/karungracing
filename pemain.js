class Pemain {
  constructor(x,y, pemain) {
    this.pemain = pemain 
    this.x = x
    this.y = y
    this.speed = 20
  }
  tampilkan() {
    image(this.pemain, this.x, this.y, 50, 100)
   
  }
  maju() {
    this.x += this.speed 
  }
  
  finish() {
    if (this.x > width-20) {
      fh.play()
      textSize(30)
      textAlign(CENTER)
      text("FINISH", width/2, height/2)
      noLoop()
    }
  }
}
