function asteroid(x, y, text, color) {

    this.pos = createVector(x, y);

    this.c = color;
    this.text = text;
    this.size = text.length * 10;

    this.completedText = "";

    this.intact = true;
}

asteroid.prototype.update = function () {

    if (this.pos.y++ > height) {
        endgame();
    }
};

asteroid.prototype.erode = function (code) {

    var char = String.fromCharCode(code).toLowerCase();


    var l = this.completedText.length + 1;
    console.log(char, this.completedText.length, l);

    if (this.text.substring(0, l) === this.completedText + char) {
        this.completedText += char;
    }

    console.log(this.text, this.completedText);

    console.log(this.text !== this.completedText);

    this.intact = this.text !== this.completedText;


};

asteroid.prototype.draw = function () {

    fill(this.c);
    stroke(this.c);
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, this.size);

    textAlign(CENTER);
    textSize(20);
    fill(255);
    text(this.text, this.pos.x, this.pos.y);
};

function findAsteroid(code, field) {

    var char = String.fromCharCode(code).toLowerCase();

    for (var i = 0; i < field.length; i++) {

        if (field[i].text.startsWith(char)) {
            return field[i];
        }
    }

    return null;

}
