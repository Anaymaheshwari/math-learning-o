// Logic for Probability will go here
// topics/probability.js

// Basic probability: favorable / total
function basicProbability(favorable, total) {
  if (total <= 0 || favorable > total) return "Invalid input";
  return (favorable / total).toFixed(4);
}

// Complementary event: 1 - P(A)
function complementProbability(probability) {
  return (1 - probability).toFixed(4);
}

// Probability of an event in a fair die roll
function probabilityOnDice(desiredOutcomes) {
  const total = 6;
  return basicProbability(desiredOutcomes.length, total);
}

// Probability of heads/tails in coin flip
function probabilityOnCoin(desiredOutcomes) {
  const total = 2; // head or tail
  return basicProbability(desiredOutcomes.length, total);
}

// Probability of drawing specific cards from a deck
function probabilityInCards(desired, total = 52) {
  return basicProbability(desired, total);
}

export {
  basicProbability,
  complementProbability,
  probabilityOnDice,
  probabilityOnCoin,
  probabilityInCards
};
