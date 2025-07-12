// Logic for Algebraic Expressions will go here
// topics/algebra.js

// Add two algebraic expressions (as strings)
function addExpressions(expr1, expr2) {
  return `(${expr1}) + (${expr2})`; // For now, show combined expression
}

// Subtract expr2 from expr1
function subtractExpressions(expr1, expr2) {
  return `(${expr1}) - (${expr2})`;
}

// Multiply two monomials like "3x" * "4x^2"
function multiplyMonomials(m1, m2) {
  const regex = /([+-]?\d*)([a-z]?)(\^?\d*)/i;
  const [, coef1, var1, pow1] = m1.match(regex);
  const [, coef2, var2, pow2] = m2.match(regex);

  const c1 = coef1 === "" || coef1 === "+" ? 1 : (coef1 === "-" ? -1 : parseInt(coef1));
  const c2 = coef2 === "" || coef2 === "+" ? 1 : (coef2 === "-" ? -1 : parseInt(coef2));
  const p1 = pow1 ? parseInt(pow1.replace("^", "") || "1") : (var1 ? 1 : 0);
  const p2 = pow2 ? parseInt(pow2.replace("^", "") || "1") : (var2 ? 1 : 0);

  const newCoef = c1 * c2;
  const newVar = var1 || var2;
  const newPow = (var1 && var2 && var1 === var2) ? p1 + p2 : (p1 + p2);

  return newVar
    ? `${newCoef}${newVar}${newPow !== 1 ? "^" + newPow : ""}`
    : `${newCoef}`;
}

// Identity: (a + b)^2 = a^2 + 2ab + b^2
function identityAplusBwholeSquare(a, b) {
  return `${a}^2 + 2×${a}×${b} + ${b}^2`;
}

// Identity: (a - b)^2 = a^2 - 2ab + b^2
function identityAminusBwholeSquare(a, b) {
  return `${a}^2 - 2×${a}×${b} + ${b}^2`;
}

// Identity: (a + b)(a - b) = a^2 - b^2
function identityProduct(a, b) {
  return `${a}^2 - ${b}^2`;
}

export {
  addExpressions,
  subtractExpressions,
  multiplyMonomials,
  identityAplusBwholeSquare,
  identityAminusBwholeSquare,
  identityProduct
};
