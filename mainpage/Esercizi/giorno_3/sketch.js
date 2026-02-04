const k = [
  3.50, 0.00,
  7.00, 10.00,
  5.50, 10.00,
  4.50, 7.00,
  2.50, 7.00,
  1.50, 10.00,
  0.00, 10.00,
  3.50, 0.00
]

function setup() {
  createCanvas(windowWidth, windowHeight)   // canvas a schermo intero
}

function draw() {
  background(255, 0, 0)   // sfondo rosso

  stroke(0)
  noFill()

  translate(width/2, height/2)  // centriamo l’animazione

  const num = 60
  for (let i = 0; i < num; i++) {
    push()
    rotate(sin((frameCount + (i + 1)) * 0.03))

    // scala basata sullo schermo → si espande su tutto
    const s = (min(width, height) * 0.12) + (num - i) * 4

    beginShape()
    for (let j = 0; j < k.length; j += 2) {
      const x1 = (k[j]   - 3.25) * s
      const y1 = (k[j+1] - 6)    * s
      vertex(x1, y1)
    }
    endShape(CLOSE)
    pop()
  }
}

// aggiorna la dimensione se la finestra cambia
function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
