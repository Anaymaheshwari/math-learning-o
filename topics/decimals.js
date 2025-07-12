// Logic code for Decimals will go here
// topics/decimals.js

// Add two decimals
function addDecimals(a, b) {
  return (a + b).toFixed(2);
}

// Subtract two decimals
function subtractDecimals(a, b) {
  return (a - b).toFixed(2);
}

// Multiply decimals
function multiplyDecimals(a, b) {
  return (a * b).toFixed(4);
}

// Divide decimals (avoid division by 0)
function divideDecimals(a, b) {
  if (b === 0) return "Undefined (division by 0)";
  return (a / b).toFixed(4);
}

// Round a decimal to given places
function roundDecimal(num, places = 2) {
  return num.toFixed(places);
}

// Compare two decimals
function compareDecimals(a, b) {
  if (a > b) return `${a} > ${b}`;
  else if (a < b) return `${a} < ${b}`;
  else return `${a} = ${b}`;
}

export {
  addDecimals,
  subtractDecimals,
  multiplyDecimals,
  divideDecimals,
  roundDecimal,
  compareDecimals
};
