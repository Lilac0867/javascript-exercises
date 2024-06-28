const convertToCelsius = function(fahrenheit) {
  // C = (F - 32) * 5/9
  const celsius = (fahrenheit - 32) * 5 / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function() {
  // F = (C * 9/5) + 32
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
