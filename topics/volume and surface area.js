//Logic code for Volume and Surface Area will go here
// topics/volumeSurfaceArea.js

// Volume formulas
function volumeCube(side) {
  return Math.pow(side, 3);
}

function volumeCuboid(length, width, height) {
  return length * width * height;
}

function volumeCylinder(radius, height) {
  return Math.PI * Math.pow(radius, 2) * height;
}

// Surface area formulas
function surfaceAreaCube(side) {
  return 6 * Math.pow(side, 2);
}

function surfaceAreaCuboid(length, width, height) {
  return 2 * (length * width + width * height + height * length);
}

function surfaceAreaCylinder(radius, height) {
  return 2 * Math.PI * radius * (radius + height);
}

// Find missing height of cuboid if volume, l, w known
function findHeightFromVolumeCuboid(volume, length, width) {
  return volume / (length * width);
}

// Unit conversion: cm³ to m³ and vice versa
function cm3ToM3(cm3) {
  return cm3 / 1e6;
}

function m3ToCm3(m3) {
  return m3 * 1e6;
}

export {
  volumeCube,
  volumeCuboid,
  volumeCylinder,
  surfaceAreaCube,
  surfaceAreaCuboid,
  surfaceAreaCylinder,
  findHeightFromVolumeCuboid,
  cm3ToM3,
  m3ToCm3
};
