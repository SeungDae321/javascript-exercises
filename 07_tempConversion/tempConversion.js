const convertToCelsius = function(firn) {
  const celc = (firn - 32)* 5/9;
  return celc
};

const convertToFahrenheit = function(celc) {
  const firn = (celc * 9/5) + 32;
  return firn
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
