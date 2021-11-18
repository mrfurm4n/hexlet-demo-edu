const square = (num) => num ** 2;

const sumOfSquares = (a, b) => square(a) + square(b);

const squareSumOfSquares = (a, b) => square(sumOfSquares(a, b), sumOfSquares(a, b));