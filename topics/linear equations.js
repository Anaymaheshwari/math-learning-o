//Logic code for Linear Equations will go here
// topics/linearEquations.js

// Solve 1-variable linear equation ax + b = c
function solveLinear1Var(a, b, c) {
  const x = (c - b) / a;
  return `x = ${x}`;
}

// Solve system of 2-variable linear equations using substitution
function solveLinear2Var(eq1, eq2) {
  // eq1, eq2 are in form: { a, b, c } for ax + by = c
  const { a: a1, b: b1, c: c1 } = eq1;
  const { a: a2, b: b2, c: c2 } = eq2;

  const determinant = a1 * b2 - a2 * b1;
  if (determinant === 0) return "No unique solution.";

  const x = (c1 * b2 - c2 * b1) / determinant;
  const y = (a1 * c2 - a2 * c1) / determinant;
  return { x: x.toFixed(2), y: y.toFixed(2) };
}

// Solve basic word problems
function solveWordProblem(type, data) {
  switch (type) {
    case "cost":
      // Example: 2 pens and 3 pencils cost Rs. 21, 3 pens and 2 pencils cost Rs. 24
      const [e1, e2] = data;
      return solveLinear2Var(e1, e2);
    case "age1":
      // "Sum of ages is S. A is older by D years than B"
      const { sum, diff } = data;
      const x = (sum - diff) / 2;
      return { A: x + diff, B: x };
    case "age2":
      // "10 years ago, father was 3 times son. Now?" (let son = x)
      const { yearsAgo, multiplier } = data;
      const xNow = (yearsAgo * (multiplier - 1)) / (multiplier);
      return {
        Son: xNow,
        Father: xNow + yearsAgo * multiplier
      };
    default:
      return "Word problem type not recognized.";
  }
}
