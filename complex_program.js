/* complex_program.js */

// This code is a complex program designed to simulate a virtual world
// with objects, interactions, and dynamic behaviors.

// Define the world object
class World {
  constructor() {
    this.objects = [];
    this.time = 0;
  }

  addObject(object) {
    this.objects.push(object);
  }

  update() {
    this.time++;
    this.objects.forEach(object => {
      object.update();
    });
  }
}

// Define the base object class
class Object {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }

  update() {
    // Default update behavior
    console.log(`${this.name} at (${this.x}, ${this.y})`);
  }
}

// Define specific object classes

class Ball extends Object {
  constructor(name, x, y, radius) {
    super(name, x, y);
    this.radius = radius;
  }

  update() {
    // Custom update behavior for balls
    console.log(`Ball ${this.name} at (${this.x}, ${this.y}), radius: ${this.radius}`);
  }
}

class Box extends Object {
  constructor(name, x, y, width, height) {
    super(name, x, y);
    this.width = width;
    this.height = height;
  }

  update() {
    // Custom update behavior for boxes
    console.log(`Box ${this.name} at (${this.x}, ${this.y}), dimensions: ${this.width}x${this.height}`);
  }
}

// Create a new world
const myWorld = new World();

// Create and add objects to the world
myWorld.addObject(new Ball("ball1", 10, 20, 5));
myWorld.addObject(new Ball("ball2", 30, 40, 8));
myWorld.addObject(new Box("box1", 50, 60, 20, 30));
myWorld.addObject(new Box("box2", 70, 80, 15, 25));

// Simulate the world for 10 time steps
for (let i = 0; i < 10; i++) {
  myWorld.update();
}