// Logic code for Perimeter will go here
// topics/perimeter.js

// Perimeter of a square = 4 × side
function perimeterSquare(side) {
  return 4 * side;
}

// Perimeter of a rectangle = 2 × (length + width)
function perimeterRectangle(length, width) {
  return 2 * (length + width);
}

// Perimeter of a triangle = sum of 3 sides
function perimeterTriangle(a, b, c) {
  return a + b + c;
}

// Perimeter of a circle = 2 × π × r
function perimeterCircle(radius) {
  return (2 * Math.PI * radius).toFixed(2);
}

// Perimeter of regular polygon = n × side
function perimeterPolygon(n, side) {
  return n * side;
}

// Solve missing side in square when perimeter is given
function sideFromPerimeterSquare(perimeter) {
  return perimeter / 4;
}

// Solve missing side in regular polygon
function sideFromPerimeterPolygon(perimeter, n) {
  return perimeter / n;
}

export {
  perimeterSquare,
  perimeterRectangle,
  perimeterTriangle,
  perimeterCircle,
  perimeterPolygon,
  sideFromPerimeterSquare,
  sideFromPerimeterPolygon
};
