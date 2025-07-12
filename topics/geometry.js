//Logic code for Geometry will go here
// topics/geometry.js

// BASIC SHAPES
const shapes = {
  triangle: { sides: 3, angles: 3 },
  square: { sides: 4, angles: 4 },
  rectangle: { sides: 4, angles: 4 },
  pentagon: { sides: 5, angles: 5 },
  hexagon: { sides: 6, angles: 6 }
};

function getShapeInfo(shapeName) {
  const shape = shapes[shapeName.toLowerCase()];
  return shape
    ? `${shapeName} has ${shape.sides} sides and ${shape.angles} angles.`
    : "Shape not found.";
}

// COORDINATE GEOMETRY

function midpoint(x1, y1, x2, y2) {
  return {
    x: ((x1 + x2) / 2).toFixed(2),
    y: ((y1 + y2) / 2).toFixed(2)
  };
}

function distance(x1, y1, x2, y2) {
  const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return dist.toFixed(2);
}

function howToDraw(shapeName) {
  switch (shapeName.toLowerCase()) {
    case "triangle":
      return "Use 3 points, connect them with lines to form a triangle.";
    case "square":
      return "Draw 4 equal-length sides with 90° angles.";
    case "rectangle":
      return "Draw opposite sides equal, all angles 90°.";
    case "coordinate":
      return "Use grid. Plot points (x, y). Connect if needed.";
    default:
      return "Drawing instructions not available.";
  }
}

export {
  getShapeInfo,
  midpoint,
  distance,
  howToDraw
};
