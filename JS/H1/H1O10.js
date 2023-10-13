function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  noStroke();
  background('lavender');
  fill('wheat')
  rect(0, 0, 450, 30);
  //noLoop();
}

function draw() {
  
  fill('black');
  text("mouseX:" + round(mouseX) + " mouseY:"+round(mouseY),10,20);
  fill('indianred');
  ellipse(mouseX,mouseY,height/50,10);
}
