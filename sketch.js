let generateCreature = false;
let creatureW = 0;
let creatureH = 0;
let creatureM = 50;


function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  translate(width/2, height/2);

  if(generateCreature){
    creatureBuilder(creatureW, creatureH, creatureM);
  }

}

function creatureBuilder(creatureWidth, creatureHeight, creatureMouth) {
  
// FEET
fill(20,80,100)
circle(50, creatureHeight/2, -creatureHeight/4, 30);
circle(-50, creatureHeight/2, -creatureHeight/4, 30);

  // BODY
  fill(20,90,100)
  ellipse(0, 0, creatureWidth, creatureHeight);

  fill(255)
  circle(creatureWidth/8, -creatureHeight/4, 40)
  circle(-creatureWidth/8, -creatureHeight/4, 40)

  // EYES
  fill(0)
  circle(-creatureWidth/8, -creatureHeight/4, 20)
  circle(creatureWidth/8, -creatureHeight/4, 20)
  
  // MOUTH
  circle(0, creatureHeight/4, creatureMouth);

  // BLUSH
  fill(100,20,20)
  circle(89, -creatureWidth/35, -creatureHeight/30, 20);
  circle(-89, -creatureWidth/35, -creatureHeight/30, 50);

  // HANDS
  fill(20,80,100)
  circle(90, creatureHeight/3, -creatureHeight/4, 30);
  circle(-90, creatureHeight/3, -creatureHeight/4, 30);

   
  
}

function mousePressed() {
  generateCreature = true;
  
  if(mouseX > width/2) {
    creatureM = random(25, 50);

  }
  if(mouseX < width/2) {
    creatureM = random(0, 25);
  }

  creatureW = 250

  if(mouseY < height/2) {
    creatureH = random(250, 500)
  }

  if(mouseY > height/2) {
    creatureH = random(50, 250)
  }

}