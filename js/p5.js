var canvas;

function setup() {
    background();
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
    fill(0);
    ellipse(mouseX, mouseY, 30, 30);
}