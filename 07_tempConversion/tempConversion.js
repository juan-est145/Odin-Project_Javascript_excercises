const convertToCelsius = function(tempInFah) 
{
  return (parseFloat(((tempInFah - 32) / 1.8).toFixed(1)));
};

const convertToFahrenheit = function(tempInCel) 
{
  return (parseFloat(((tempInCel * 1.8) + 32).toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


/*Celsius to Fahrenheit Formula: (°C * 1.8) + 32 = °F

Fahrenheit to Celsius Formula: (°F - 32) / 1.8 = °C*/