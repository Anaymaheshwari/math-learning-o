// topics/area.js

function solve(input) {
  input = input.toLowerCase();

  const match = input.match(/area of square.*?(\d+\.?\d*)/);
  if (match) {
    const side = parseFloat(match[1]);
    return `Area of square = ${side} × ${side} = ${side * side} sq units`;
  }

  return "Sorry, I couldn’t understand the question for area.";
}

// Area of a square: side^2
function areaSquare(side) {
  return side * side;
}

// Area of a rectangle: length × width
function areaRectangle(length, width) {
  return length * width;
}

// Area of a circle: πr²
function areaCircle(radius) {
  return (Math.PI * radius * radius).toFixed(2);
}

// Area of a triangle: 1/2 × base × height
function areaTriangle(base, height) {
  return 0.5 * base * height;
}

// Area of a trapezium: 1/2 × (a + b) × height
function areaTrapezium(a, b, height) {
  return 0.5 * (a + b) * height;
}

// Area of regular polygon
function areaPolygon(n, sideLength, apothem) {
  return 0.5 * n * sideLength * apothem;
}

// Solve missing side for square given area
function sideFromAreaSquare(area) {
  return Math.sqrt(area).toFixed(2);
}

// Solve missing radius from area of circle
function radiusFromAreaCircle(area) {
  return Math.sqrt(area / Math.PI).toFixed(2);
}

// ✅ SINGLE export block
export {
  solve,
  areaSquare,
  areaRectangle,
  areaCircle,
  areaTriangle,
  areaTrapezium,
  areaPolygon,
  sideFromAreaSquare,
  radiusFromAreaCircle
};
