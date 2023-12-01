var kater, bomen, kever;
var keverX;
var keverY;

function preload() {
  kater = loadImage("images/brieck.jpg");
  bomen = loadImage("images/bomen.jpg");
  kever = loadImage("images/sprites/kever.png");
}

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  keverX = 150;
  keverY = 100;
}

function draw() {
  // Stap 2: Pas regel 20 aan naar background(kater);
  background(kater);
  
  // Stap 3: In de preload is de bijbehorende jpg-afbeelding geladen. De bestandsnaam is de naam van de kater. Hoe heet hij?
  // Antwoord: Het lijkt erop dat de naam van de kater 'brieck.jpg' is.

  // Stap 4: Verwijder de // voor image(kater,0,0); en bekijk het resultaat. Probeer uit te leggen waarom we niet hetzelfde zien.
  // Antwoord: We zien mogelijk geen verschil omdat de achtergrond al is ingesteld op de afbeelding 'kater' op regel 20.

  // Stap 5: Verander regel 20 in background('grey'); en verander de getallen 0,0 in regel 21. Welke functies hebben ze?
  // Antwoord: background('grey') stelt de achtergrondkleur in op grijs. De getallen 0,0 op regel 21 geven de positie (x, y) aan waar de afbeelding wordt weergegeven.

  // Stap 6: Pas regel 21 aan tot image(kater,25,25,400,400);. Wat zie je? Wat is de betekenis van 400,400?
  // Antwoord: De afbeelding 'kater' wordt weergegeven op positie (25,25) met een breedte van 400 pixels en hoogte van 400 pixels.

  // Stap 7: Haal de // weg bij regel 24 zodat de kever uit voorbeeld 10 weer te zien is. Verklaar de beweging die de kever maakt.
  // Antwoord: De kever beweegt willekeurig in horizontale en verticale richtingen door de keverX en keverY posities aan te passen met random waarden tussen -5 en 5.

  // Stap 8: Zorg dat kever met grootte 30 × 30 (pixels) wordt afgebeeld.
  // Antwoord: Pas regel 24 aan naar image(kever, keverX, keverY, 30, 30);
  image(kever, keverX, keverY, 30, 30);
}
