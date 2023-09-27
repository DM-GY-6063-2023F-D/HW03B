let diamSmall = 10;
let diamMedium = 20;
let diamLarge = 35;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  randomSeed(1010);

  stroke(200, 20, 20);
  fill(200, 20, 20);

  for (let x = 0; x < width + diamLarge; x += 1.2 * diamLarge) {
    for (let y = 0; y < height + diamLarge; y += 1.2 * diamLarge) {
      if (random() < 0.3) {
        let xOffset = random(-diamSmall, diamSmall);
        let yOffset = random(-diamSmall, diamSmall);
        ellipse(x + xOffset, y + yOffset, diamLarge, diamLarge);
      } else if (random() < 0.6) {
        let xOffset = random(-diamMedium, diamMedium);
        let yOffset = random(-diamMedium, diamMedium);
        ellipse(x + xOffset, y + yOffset, diamMedium, diamMedium);
      } else {
        let xOffset = random(-diamLarge, diamLarge);
        let yOffset = random(-diamLarge, diamLarge);
        ellipse(x + xOffset, y + yOffset, diamSmall, diamSmall);
      }
    }
  }
}
