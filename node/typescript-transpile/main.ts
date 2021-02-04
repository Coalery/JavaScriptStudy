interface Point {
  readonly x: number;
  readonly y: number;
  readonly z?: number;
}

function getPoint(p: Point): string {
  if (p.z) return `X : ${p.x}, Y : ${p.y}, Z : ${p.z}`;
  return `X : ${p.x}, Y : ${p.y}`;
}

let point1 = { x: 2, y: 3, z: 4 };
let point2 = { x: 4, y: 7 };

console.log(getPoint(point1));
console.log(getPoint(point2));
