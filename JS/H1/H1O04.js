function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  // teken het huis
  strokeWeight(4);
  stroke('darkgray');
  fill('lightgray');
  rect(100,280,100,100);
  // VERVANG DEZE REGEL door een regel die het dak tekent
 
  strokeWeight(4)
  stroke('darkgray')
  fill('black')
  rect(115,328,30,50);

  strokeWeight(4)
  stroke('darkgray')
  fill('gray')
  triangle(200,280,150,200,100,280)
  
  noStroke()
  // stroke('grey')
  fill('darkgray')
  circle(375,100,150)


  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  ellipse(320,200,90,150)
  // Als je een cirkel wilt tekenen met diameter 300 kun je ellipse(0,0,300) gebruiken.
  // Als je een ellipse wilt maken met breedte 300 en hoogte 500, dan moet je een parameter toevoegen: ellipse(0,0,300,500).
}
