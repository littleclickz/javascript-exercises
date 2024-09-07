const add = function(numOne, numTwo) {
  let result = numOne + numTwo;
  return result;
};

const subtract = function(numOne, numTwo) {
	let result = numOne - numTwo;
  return result;
};

const sum = function (array) {
  let arraySum = 0;
  for (let i = 0; i <= (array.length - 1); i++) {
    arraySum += array[i];
  }
  return arraySum;
};

const multiply = function (array) {
  let arraySum = 1;
  for (let i = 0; i <= (array.length - 1); i++) {
    arraySum *= array[i];
  }
  return arraySum;
};

const power = function(numOne, numTwo) {
	let result = numOne ** numTwo;
  return result;
};

const factorial = function(numOne) {
  let result = 1;
  for (let i = numOne; i >= 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
