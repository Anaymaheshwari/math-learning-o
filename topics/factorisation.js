//Logic code for Factorisation will go here
// topics/factorisation.js

// Common factor (GCD)
function commonFactor(a, b) {
  if (b === 0) return a;
  return commonFactor(b, a % b);
}

// Difference of squares: a² - b² = (a + b)(a - b)
function differenceOfSquares(expr) {
  const match = expr.match(/^(\d+)?x\^2\s*-\s*(\d+)$/);
  if (match) {
    const a = match[1] ? Number(match[1]) : 1;
    const b = Math.sqrt(Number(match[2]));
    return `(${Math.sqrt(a)}x + ${b})(${Math.sqrt(a)}x - ${b})`;
  }
  return "Not a difference of squares";
}

// Perfect square trinomial: a² ± 2ab + b²
function perfectSquareTrinomial(expr) {
  // Only supports a² + 2ab + b² format with a=1
  const match = expr.match(/^x\^2\s*([+-]\s*\d+)x\s*\+\s*(\d+)$/);
  if (match) {
    const b = parseInt(match[1].replace(/\s+/g, ''));
    const c = parseInt(match[2]);
    const half = b / 2;
    if (half * half === c) {
      return `(x ${b > 0 ? '+' : '-'} ${Math.abs(half)})²`;
    }
  }
  return "Not a perfect square trinomial";
}

// Quadratic factorisation (ax² + bx + c)
function factorQuadratic(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return "No real factors";
  const sqrtD = Math.sqrt(discriminant);
  const x1 = (-b + sqrtD) / (2 * a);
  const x2 = (-b - sqrtD) / (2 * a);
  return `a(x - ${x1.toFixed(2)})(x - ${x2.toFixed(2)})`;
}

export {
  commonFactor,
  differenceOfSquares,
  perfectSquareTrinomial,
  factorQuadratic
};
