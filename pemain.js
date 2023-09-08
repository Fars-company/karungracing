class Pemain {
  constructor(y,warna) {
    this.d = 40 
    this.warna = color(warna)
    this.x = 20 
    this.y = y
    this.speed = 20
  }
  tampilkan() {
    fill(this.warna)
    circle(this.x, this.y, this.d)
  }
  maju() {
    this.x += this.speed 
  }
  
  finish() {
    if (this.x > width-20) {
      fh.play()
      fill(this.warna)
      textSize(30)
      textAlign(CENTER)
      text("FINISH", width/2, height/2)
      noLoop()
    }
  }
}
