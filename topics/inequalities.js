//Logic code for Inequalities will go here
// topics/inequalities.js

// Solve inequality of form ax + b < c
function solveLinearInequality(a, b, c, operator) {
  const x = (c - b) / a;
  return `x ${operator} ${x.toFixed(2)}`;
}

// Get inequality type from symbol
function interpretInequality(symbol) {
  switch (symbol) {
    case '<': return "less than";
    case '>': return "greater than";
    case '<=': return "less than or equal to";
    case '>=': return "greater than or equal to";
    default: return "Invalid symbol";
  }
}

// Generate number line explanation
function numberLine(x, operator) {
  switch (operator) {
    case '<': return `All values to the left of ${x} (open circle)`;
    case '>': return `All values to the right of ${x} (open circle)`;
    case '<=': return `All values ≤ ${x} (closed circle)`;
    case '>=': return `All values ≥ ${x} (closed circle)`;
    default: return "Invalid operator";
  }
}

export {
  solveLinearInequality,
  interpretInequality,
  numberLine
};
