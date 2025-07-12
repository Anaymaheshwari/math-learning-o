//Logic code for Linear Equations will go here
// topics/linearEquations.js

// Solve 1-variable: ax + b = c
function solveOneVariable(a, b, c) {
  if (a === 0) return (b === c) ? "Infinite solutions" : "No solution";
  const x = (c - b) / a;
  return `x = ${x.toFixed(2)}`;
}

// Solve 2-variable system using substitution/determinants
function solveTwoVariable(a1, b1, c1, a2, b2, c2) {
  const D = a1 * b2 - a2 * b1;
  if (D === 0) return "No unique solution";
  const Dx = c1 * b2 - c2 * b1;
  const Dy = a1 * c2 - a2 * c1;
  const x = Dx / D;
  const y = Dy / D;
  return `x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
}

// Word problem solver for common age and money-based questions
// Format: { type: "ageSum", total: 40, diff: 4 }
function solveLinearWordProblem(problem) {
  switch (problem.type) {
    case "ageSum":
      // x + y = total, x - y = diff
      const { total, diff } = problem;
      const x = (total + diff) / 2;
      const y = total - x;
      return `Ages are: ${x} and ${y}`;
    
    case "moneyShare":
      // A and B together have ₹T, and A has ₹more than B
      const { totalMoney, diffMoney } = problem;
      const A = (totalMoney + diffMoney) / 2;
      const B = totalMoney - A;
      return `A has ₹${A}, B has ₹${B}`;

    case "costEquation":
      // A pen + 2 pencils = ₹14, 2 pens + pencil = ₹19
      const eq = solveTwoVariable(problem.a1, problem.b1, problem.c1, problem.a2, problem.b2, problem.c2);
      return `Pen & Pencil prices: ${eq}`;
    
    default:
      return "Unsupported word problem format.";
  }
}

export {
  solveOneVariable,
  solveTwoVariable,
  solveLinearWordProblem
};
