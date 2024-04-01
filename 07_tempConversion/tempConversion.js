const convertToCelsius = function(fahrenheittemp) {
  let celsiustemp = (fahrenheittemp - 32) / 1.8
  if (celsiustemp % 1 !== 0) {
    return parseFloat(celsiustemp.toFixed(1))
  } else {
    return celsiustemp;
  }
};

const convertToFahrenheit = function(celsiustemp) {
  let fahrenheittemp = (celsiustemp * 1.8) + 32;
  if (fahrenheittemp % 1 !== 0 ){
    return parseFloat(fahrenheittemp.toFixed(1))
  } else {
    return fahrenheittemp
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
