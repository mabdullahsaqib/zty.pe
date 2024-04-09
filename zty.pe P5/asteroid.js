function asteroid(x, y, text) {

    this.pos = createVector(x, y);

    this.c = 255;
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

    var char = String.fromCharCode(code);
    var l = this.completedText.length + l;

    if (this.text.substring(0, l) === (this.completedText + char)) {
        this.completedText += char;
    }

    this.intact = this.text !== this.completedText;

};

asteroid.prototype.draw = function () {

    fill(this.c);
    stroke(0);
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, this.size);

    textAlign(CENTER);
    textSize(20);
    fill(255);
    text(this.text, this.pos.x, this.pos.y);
};

