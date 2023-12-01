var strand;
var strandX = 0;

function preload() {
  strand = loadImage("images/backgrounds/strand.jpg");
}

function setup() {
  canvas = createCanvas(600, 400);
  canvas.parent('processing');
}

function draw() {
  background('grey');

  // Teken de eerste afbeelding
  image(strand, strandX, 0);

  // Teken de tweede afbeelding naast de eerste
  image(strand, strandX + strand.width, 0);

  // Controleer of de eerste afbeelding uit het zicht is verdwenen
  if (strandX <= -strand.width) {
    // Verplaats de eerste afbeelding naar rechts van de tweede afbeelding
    strandX += strand.width;
  }

  // Controleer of de tweede afbeelding uit het zicht is verdwenen
  if (strandX + strand.width <= 0) {
    // Verplaats de tweede afbeelding naar rechts van de eerste afbeelding
    strandX += strand.width;
  }

  // Beweeg de afbeeldingen naar links
  strandX--;
}
