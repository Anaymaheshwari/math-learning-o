//Logic for exponents will go here
// topics/exponents.js

// 1. Simplify using exponent laws
function simplifyExponent(base, exponent1, exponent2, operation) {
  switch (operation) {
    case "multiply": // a^m * a^n = a^(m+n)
      return `${base}^${exponent1 + exponent2}`;
    case "divide": // a^m / a^n = a^(m-n)
      return `${base}^${exponent1 - exponent2}`;
    case "power": // (a^m)^n = a^(m*n)
      return `${base}^${exponent1 * exponent2}`;
    default:
      return "Invalid operation";
  }
}

// 2. Evaluate expressions like a^b
function evaluateExponent(base, exponent) {
  return Math.pow(base, exponent);
}

// 3. Convert number to standard exponential form (e.g., 650000 → 6.5 × 10^5)
function toStandardForm(number) {
  if (number === 0) return "0";
  let exponent = Math.floor(Math.log10(Math.abs(number)));
  let mantissa = (number / Math.pow(10, exponent)).toFixed(2);
  return `${mantissa} × 10^${exponent}`;
}

// 4. Convert back from exponential form to number
function fromStandardForm(mantissa, exponent) {
  return parseFloat(mantissa) * Math.pow(10, exponent);
}

// 5. Parse and evaluate string like "2^5"
function parseAndEvaluate(expr) {
  try {
    if (!expr.includes("^")) return "Invalid format";
    let [base, exponent] = expr.split("^").map(Number);
    return `${expr} = ${Math.pow(base, exponent)}`;
  } catch (err) {
    return "Error in evaluation";
  }
}

// Export functions to be used in app.js
export {
  simplifyExponent,
  evaluateExponent,
  toStandardForm,
  fromStandardForm,
  parseAndEvaluate
};
