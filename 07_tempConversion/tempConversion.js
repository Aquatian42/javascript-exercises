const convertToCelsius = function(input) {
    return Math.round((((input - 32) / 9) * 5 * 10)) / 10
};

const convertToFahrenheit = function(input) {
  return Math.round((((input / 5) * 9) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
