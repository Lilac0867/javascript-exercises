const add = function(a, b) {
	if(a === undefined || b === undefined) {
    a, b = 0;
  }
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
	if(arr === undefined) {
    arr = [0];
  }
  return arr.reduce(((total, nextNum) => total + nextNum), 0);
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
