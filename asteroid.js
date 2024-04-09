function asteroid(x, y, text) {

    this.pos = createVector(x, y);

    this.color = color;
    this.text = text;
    this.size = this.text.length * 10;

    this.completedText = "";
}

asteroid.prototype.update = function () {

    this.pos.y += 1;
};

asteroid.prototype.draw = function () {

    fill(this.color);
    stroke(0);
    strokeWeight(4);
    ellipse(this.pos.x, this.pos.y, this.size);

    nostroke();
    textSize(20);
    fill(255);
    text(this.text, this.pos.x, this.pos.y);
};

