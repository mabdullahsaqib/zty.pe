var words = ["ztype", "script", "kaelinator", "java", "p5", "youtube", "game"]

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

  if (frameCount % 60 === 0) {//Math.abs(100 - score) === 0) {

    if (noise(frameCount) > 0.5) {

      field.push(new asteroid(random(width - 150) + 75, 0, random(words), randomColor()));
    }
  }

  if (noise(frameCount) > nap(score, 0, 1000, 0.9, 0.01)) {

    field.push(new asteroid(random(width - 150) + 75, 0, random(words), randomColor()));


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

    fill(255);
    noStroke();
    textAlign(LEFT);
    textSize(20);
    text(focus.completedText, 10, height - 40);
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


