const convertToCelsius = function(tempF) {
  let tempC = (tempF-32)*(5/9);
  tempRounded = Math.round(tempC*10) / 10;
  return tempRounded;
};

const convertToFahrenheit = function(tempC) {
  let tempF = ((tempC * (9/5)) +32);
  tempRounded = Math.round(tempF*10) / 10;
  return tempRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
