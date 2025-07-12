// Logic code for Integers will go here
// topics/integers.js

// Add two integers
function addIntegers(a, b) {
  return a + b;
}

// Subtract integers
function subtractIntegers(a, b) {
  return a - b;
}

// Multiply integers
function multiplyIntegers(a, b) {
  return a * b;
}

// Divide integers (with check)
function divideIntegers(a, b) {
  if (b === 0) return "Undefined (division by 0)";
  return Math.floor(a / b);  // Integer division
}

// Compare two integers
function compareIntegers(a, b) {
  if (a > b) return `${a} > ${b}`;
  else if (a < b) return `${a} < ${b}`;
  else return `${a} = ${b}`;
}

// Represent integer position on number line
function numberLinePosition(n) {
  let line = "";
  for (let i = -10; i <= 10; i++) {
    line += (i === n ? `[${i}] ` : `${i} `);
  }
  return line.trim();
}

export {
  addIntegers,
  subtractIntegers,
  multiplyIntegers,
  divideIntegers,
  compareIntegers,
  numberLinePosition
};
