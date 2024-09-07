const convertToCelsius = function(temp) {
  let celsiusAnswer = (temp - 32) * (5 / 9);
  var celsiusRounded = Math.round(celsiusAnswer * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(temp) {
  let fahrenheitAnswer = (temp * (9 / 5) + 32);
  var fahrenheitRounded = Math.round(fahrenheitAnswer * 10) / 10;
  return fahrenheitRounded;
};

convertToCelsius(32);

convertToCelsius(100);

convertToCelsius(-100);

convertToFahrenheit(0);

convertToFahrenheit(73.2);

convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
