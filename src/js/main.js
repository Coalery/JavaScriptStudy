function Circle(radius) {
  if (new.target) {
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  } else {
    return new Circle(radius);
  }
}

let circle1 = new Circle(5.0);
console.log(circle1);

let circle2 = Circle(5.0);
console.log(circle2);
