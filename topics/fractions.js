// Logic code for Fractions will go here
// topics/fractions.js

// Helper to find GCD
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Simplify fraction
function simplifyFraction(numerator, denominator) {
  const divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
}

// Add two fractions
function addFractions(n1, d1, n2, d2) {
  const num = n1 * d2 + n2 * d1;
  const den = d1 * d2;
  return simplifyFraction(num, den);
}

// Subtract two fractions
function subtractFractions(n1, d1, n2, d2) {
  const num = n1 * d2 - n2 * d1;
  const den = d1 * d2;
  return simplifyFraction(num, den);
}

// Multiply fractions
function multiplyFractions(n1, d1, n2, d2) {
  return simplifyFraction(n1 * n2, d1 * d2);
}

// Divide fractions: (a/b) ÷ (c/d) = (a*d)/(b*c)
function divideFractions(n1, d1, n2, d2) {
  return simplifyFraction(n1 * d2, d1 * n2);
}

// Convert improper fraction to mixed number
function toMixedNumber(numerator, denominator) {
  const whole = Math.floor(numerator / denominator);
  const remainder = numerator % denominator;
  return remainder === 0
    ? `${whole}`
    : `${whole} ${remainder}/${denominator}`;
}

// Convert mixed to improper: a b/c → (a*c + b)/c
function toImproperFraction(whole, num, den) {
  return `${whole * den + num}/${den}`;
}

export {
  simplifyFraction,
  addFractions,
  subtractFractions,
  multiplyFractions,
  divideFractions,
  toMixedNumber,
  toImproperFraction
};
