//Logic code for Compound Interest will go here
// topics/compoundInterest.js

// CI = P(1 + R/100)^T - P

// Calculate Compound Interest
function compoundInterest(principal, rate, time) {
  const amount = principal * Math.pow((1 + rate / 100), time);
  return (amount - principal).toFixed(2);
}

// Total amount = Principal + CI
function totalAmountCI(principal, rate, time) {
  const amount = principal * Math.pow((1 + rate / 100), time);
  return amount.toFixed(2);
}

// Reverse: Find Principal
function findPrincipalCI(amount, rate, time) {
  const principal = amount / Math.pow(1 + rate / 100, time);
  return principal.toFixed(2);
}

// Reverse: Find Rate (approximation using iterative method)
function findRateCI(principal, amount, time) {
  let rate = 0;
  for (let r = 0; r <= 100; r += 0.01) {
    const estAmount = principal * Math.pow(1 + r / 100, time);
    if (Math.abs(estAmount - amount) < 0.01) {
      rate = r;
      break;
    }
  }
  return rate.toFixed(2);
}

// Reverse: Find Time (using logarithm)
function findTimeCI(principal, rate, amount) {
  const t = Math.log(amount / principal) / Math.log(1 + rate / 100);
  return t.toFixed(2);
}

// Solve word problems like: { type: "findCI", p: 2000, r: 5, t: 2 }
function solveCompoundWordProblem({ type, p, r, t, a }) {
  switch (type) {
    case "findCI":
      return `Compound Interest = ₹${compoundInterest(p, r, t)}`;
    case "findAmount":
      return `Total Amount = ₹${totalAmountCI(p, r, t)}`;
    case "findPrincipal":
      return `Principal = ₹${findPrincipalCI(a, r, t)}`;
    case "findRate":
      return `Rate = ${findRateCI(p, a, t)}%`;
    case "findTime":
      return `Time = ${findTimeCI(p, r, a)} years`;
    default:
      return "Invalid word problem type.";
  }
}

export {
  compoundInterest,
  totalAmountCI,
  findPrincipalCI,
  findRateCI,
  findTimeCI,
  solveCompoundWordProblem
};
