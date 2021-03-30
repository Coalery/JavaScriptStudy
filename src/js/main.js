function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle1 = new Circle(1);

console.log(Object.getPrototypeOf(circle1) === Circle.prototype);
console.log(circle1.constructor === Circle);
console.log(Circle.prototype.constructor === Circle);
console.log(new new new circle1.constructor(5).constructor(10).constructor(15));
