// Logic for Percentage will go here
// topics/percentage.js

// Convert percent to decimal (e.g., 25% → 0.25)
function percentToDecimal(percent) {
  return percent / 100;
}

// Convert decimal to percent (e.g., 0.75 → 75%)
function decimalToPercent(decimal) {
  return (decimal * 100).toFixed(2) + "%";
}

// Find % of a number: e.g., 20% of 300 = 60
function findPercentageValue(percent, number) {
  return (percent / 100) * number;
}

// A is what percent of B
function whatPercentOf(a, b) {
  return ((a / b) * 100).toFixed(2) + "%";
}

// Increase a number by X%
function increaseByPercent(number, percent) {
  return number + findPercentageValue(percent, number);
}

// Decrease a number by X%
function decreaseByPercent(number, percent) {
  return number - findPercentageValue(percent, number);
}

export {
  percentToDecimal,
  decimalToPercent,
  findPercentageValue,
  whatPercentOf,
  increaseByPercent,
  decreaseByPercent
};
