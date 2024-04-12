var focus = null;
var field = [];

var score = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(51);

  /*draw planet */
  fill("#603A00");
  stroke("#77FF77");
  strokeWeight(5);
  rect(0, height - 15, width, height)

  /*groundcontrol*/
  beginShape();
  vertex(width / 2 - 20, height);
  vertex(width / 2, height - 50);
  vertex(width / 2 + 20, height);
  endShape(CLOSE);

  drawLazer();

  for (var i = field.length - 1; i >= 0; i--) {

    field[i].update();

    if (field[i].intact) {
      field[i].draw();
    }
    else {
      score += field[i].text.length;
      field.splice(i, 1);
      focus = null;
    }
  }

  if (frameCount % 20 === 0) {//Math.abs(100 - score) === 0) {

    if (noise(frameCount) > 0.5) {

      field.push(new asteroid(random(width), 0, "aaaa", randomColor()));
    }
  }


  /*draw score */
  noStroke();
  textAlign(RIGHT);
  textSize(30);
  fill(255);
  text(score, 50, height / 2);

}

function randomColor() {
  return color(random(255), random(255), random(255));
}

function drawLazer() {
  if (!focus)
    return;

  stroke(randomColor());
  strokeWeight(focus.completedText.length + 1);
  line(width / 2, height - 50, focus.pos.x, focus.pos.y);
}

function keyPressed() {

  if (focus) {
    focus.erode(keyCode);
  }
  else {
    focus = findAsteroid(keyCode, field);
    if (focus)
      focus.erode(keyCode);
  }

}

function endgame() {

  console.log("Game Over");
  noLoop();
}


