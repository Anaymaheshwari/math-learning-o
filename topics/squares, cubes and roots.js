//Logic code for Squares , Cubes and Roots will go here
// topics/squaresCubesRoots.js

// Squares & cubes
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

// Square root and cube root
function squareRoot(n) {
  return Math.sqrt(n).toFixed(4);
}

function cubeRoot(n) {
  return Math.cbrt(n).toFixed(4);
}

// Prime factorization (returns array of prime factors)
function primeFactors(n) {
  const factors = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 1) factors.push(n);
  return factors;
}

// Check if number is perfect square
function isPerfectSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}

// Check if number is perfect cube
function isPerfectCube(n) {
  return Number.isInteger(Math.cbrt(n));
}

export {
  square,
  cube,
  squareRoot,
  cubeRoot,
  primeFactors,
  isPerfectSquare,
  isPerfectCube
};
