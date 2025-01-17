let triangles = [];

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block'); // Ensure canvas has no extra padding/margin
  for (let i = 0; i < 20; i++) {
    triangles.push(new Triangle());
  }
}

function draw() {
  clear();
  triangles.forEach(tri => {
    tri.update();
    tri.display();
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Triangle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.size = random(30, 80);
  }

  update() {
    this.pos.add(this.vel);
    this.avoidMouse();
    this.edges();
  }

  display() {
    fill('rgba(255, 255, 255, 0.8)'); // Light white, more visible
    noStroke();
    triangle(this.pos.x, this.pos.y, this.pos.x - this.size, this.pos.y + this.size, this.pos.x + this.size, this.pos.y + this.size);
  }

  avoidMouse() {
    let mouse = createVector(mouseX, mouseY);
    let d = p5.Vector.dist(this.pos, mouse);
    if (d < 50) { // Distance to skip from mouse
      this.vel.add(p5.Vector.sub(this.pos, mouse).setMag(0.5));
    }
  }

  edges() {
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }
}
