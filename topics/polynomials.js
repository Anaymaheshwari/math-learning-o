// Logic code for Polynomials will go here
// topics/polynomials.js

// Polynomial operations: represented as arrays of coefficients (highest to lowest)
function addPolynomials(p1, p2) {
  const maxLen = Math.max(p1.length, p2.length);
  const result = Array(maxLen).fill(0);
  for (let i = 0; i < maxLen; i++) {
    result[i] = (p1[i] || 0) + (p2[i] || 0);
  }
  return result;
}

function subtractPolynomials(p1, p2) {
  const maxLen = Math.max(p1.length, p2.length);
  const result = Array(maxLen).fill(0);
  for (let i = 0; i < maxLen; i++) {
    result[i] = (p1[i] || 0) - (p2[i] || 0);
  }
  return result;
}

function multiplyPolynomials(p1, p2) {
  const result = Array(p1.length + p2.length - 1).fill(0);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      result[i + j] += p1[i] * p2[j];
    }
  }
  return result;
}

// Degree and type
function getDegree(p) {
  return p.findIndex(coef => coef !== 0);
}

function getType(p) {
  const terms = p.filter(coef => coef !== 0).length;
  return terms === 1 ? "Monomial" : terms === 2 ? "Binomial" : "Trinomial";
}

// Evaluate at x = value
function evaluatePolynomial(p, x) {
  return p.reduce((sum, coef, i) => sum + coef * Math.pow(x, p.length - i - 1), 0);
}

// Word problem solver
function solvePolynomialWordProblem(type, data) {
  switch (type) {
    case "add":
      return `Sum = [${addPolynomials(data[0], data[1]).join(", ")}]`;
    case "subtract":
      return `Difference = [${subtractPolynomials(data[0], data[1]).join(", ")}]`;
    case "multiply":
      return `Product = [${multiplyPolynomials(data[0], data[1]).join(", ")}]`;
    case "evaluate":
      return `Value at x=${data[1]}: ${evaluatePolynomial(data[0], data[1])}`;
    default:
      return "Unknown type";
  }
}

export {
  addPolynomials,
  subtractPolynomials,
  multiplyPolynomials,
  evaluatePolynomial,
  getDegree,
  getType,
  solvePolynomialWordProblem
};
