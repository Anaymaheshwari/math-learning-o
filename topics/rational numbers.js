// Logic code for Rational Numbers will go here
// topics/rationalNumbers.js

// Simplify a rational number (as a fraction)
function simplifyFraction(numerator, denominator) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
}

// Basic operations
function addRational(a1, b1, a2, b2) {
  const num = a1 * b2 + a2 * b1;
  const den = b1 * b2;
  return simplifyFraction(num, den);
}

function subtractRational(a1, b1, a2, b2) {
  const num = a1 * b2 - a2 * b1;
  const den = b1 * b2;
  return simplifyFraction(num, den);
}

function multiplyRational(a1, b1, a2, b2) {
  return simplifyFraction(a1 * a2, b1 * b2);
}

function divideRational(a1, b1, a2, b2) {
  return simplifyFraction(a1 * b2, b1 * a2);
}

// Check rational number property (like closure)
function checkProperty(op, a1, b1, a2, b2) {
  let result;
  switch (op) {
    case "add":
      result = addRational(a1, b1, a2, b2); break;
    case "subtract":
      result = subtractRational(a1, b1, a2, b2); break;
    case "multiply":
      result = multiplyRational(a1, b1, a2, b2); break;
    case "divide":
      result = divideRational(a1, b1, a2, b2); break;
    default:
      return "Invalid operation";
  }
  return `Result is ${result}, which is a rational number. So property holds.`;
}

// Example word problem solver
function solveRationalWordProblem(type, data) {
  switch (type) {
    case "sum":
      return `Sum = ${addRational(...data[0], ...data[1])}`;
    case "product":
      return `Product = ${multiplyRational(...data[0], ...data[1])}`;
    case "compare":
      const val1 = data[0][0] / data[0][1];
      const val2 = data[1][0] / data[1][1];
      return val1 > val2 ? "First is greater" : val1 < val2 ? "Second is greater" : "Both are equal";
    default:
      return "Invalid word problem type.";
  }
}

export {
  simplifyFraction,
  addRational,
  subtractRational,
  multiplyRational,
  divideRational,
  checkProperty,
  solveRationalWordProblem
};
