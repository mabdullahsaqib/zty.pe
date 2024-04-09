var focus;
var field = [];

var score = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(51);

  focus = null;

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

  if (frameCount % 10 == 0) {

    if (noise(frameCount) > 0.5) {

      field.push(new asteroid(random(width), 0, "a", color("#FF00FF")));
    }
  }

  textSize(30);
  fill(255);
  text(score, 50, height / 2);

}

function findAsteroid(code, field) {

  var char = String.fromCharCode(code).toLowerCase();

  for (var i = field.length - 1; i >= 0; i--) {

    if (field[i].text.startsWith(char)) {
      return field[i];
    }
  }

  return null;

}

function keyPressed() {

  if (focus) {
    focus.erode(keyCode);
  }
  else {
    focus = findAsteroid(keyCode, field);
  }

}

function endgame() {
  noloop();
  console.log("Game Over");
}