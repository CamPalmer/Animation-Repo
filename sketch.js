 // Click to change the color

let sphereColor= 0
let backgroundColor = 255

function setup() {
  backgroundColor = random(255);
  sphereColor = random(255);
  createCanvas(400, 400, WEBGL);
}

function draw() {
background (0)
  rotateX(frameCount * 0.02);
  rotateZ(frameCount * 0.02);
  
  fill(sphereColor)
  sphere(80);
  
  if (mouseIsPressed) {
		sphereColor = color(random(255), random(255), random(255));
		
  }
  
  
}


