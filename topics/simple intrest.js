// Logic code for Simple Interest will go here
// topics/simpleInterest.js

// SI = (P × R × T) / 100

// Find Simple Interest
function simpleInterest(principal, rate, time) {
  return (principal * rate * time / 100).toFixed(2);
}

// Find Principal
function findPrincipal(si, rate, time) {
  return (si * 100 / (rate * time)).toFixed(2);
}

// Find Rate
function findRate(si, principal, time) {
  return (si * 100 / (principal * time)).toFixed(2);
}

// Find Time
function findTime(si, principal, rate) {
  return (si * 100 / (principal * rate)).toFixed(2);
}

// Total Amount = Principal + SI
function totalAmountSI(principal, rate, time) {
  const si = principal * rate * time / 100;
  return (principal + si).toFixed(2);
}

// Word problem solver: expects object like { type: "findSI", p: ..., r: ..., t: ... }
function solveInterestWordProblem({ type, p, r, t, si }) {
  switch (type) {
    case "findSI":
      return `Simple Interest = ₹${simpleInterest(p, r, t)}`;
    case "findPrincipal":
      return `Principal = ₹${findPrincipal(si, r, t)}`;
    case "findRate":
      return `Rate = ${findRate(si, p, t)}%`;
    case "findTime":
      return `Time = ${findTime(si, p, r)} years`;
    default:
      return "Invalid word problem type.";
  }
}

export {
  simpleInterest,
  totalAmountSI,
  findPrincipal,
  findRate,
  findTime,
  solveInterestWordProblem
};
