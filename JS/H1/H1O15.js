var xJOS = 75;
var yJOS = 75;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  frameRate(20);
  fill('black');
}

function draw() {
  background('lavender');
  
  // Teken de eerste JOS op x = 75
  tekenJos(xJOS, yJOS);
  
  // Teken de tweede JOS op x = 175
  tekenJos(xJOS + 100, yJOS);
  
  // Teken de derde JOS op x = 275
  tekenJos(xJOS + 200, yJOS);
  
  // Laat alle JOS poppetjes naar rechts bewegen met 3 pixels
  xJOS += 3;
  
  // Constrain om te zorgen dat JOS stopt bij de rechterkant van het canvas
  xJOS = constrain(xJOS, 75, width - 75);
}

function tekenJos(x, y) {
  push();
  translate(x, y);
  scale(1); 
  noStroke();
  fill('indianred');
  ellipse(0, 0, 50);
  fill('slategray');
  ellipse(-7, -10, 17);
  ellipse(7, -10, 17);
  fill('white');
  ellipse(-7, -8, 7, 13);
  ellipse(7, -8, 7, 13);
  fill('orange');
  ellipse(0, 3, 17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}
