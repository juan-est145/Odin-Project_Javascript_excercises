const add = function(number1, number2) {
	return (number1 + number2);
};

const subtract = function(number1, number2) {
	return (number1 - number2);
};

const sum = function(numbers) {
  if (numbers.length === 0)
    return (0);
	return (numbers.reduce((total, current) => total + current));
};

const multiply = function(numbers) {
  if (numbers.length === 0)
  return (0);
return (numbers.reduce((total, current) => total * current));
};

const power = function(number, exponent) {
  let result = number;
  for(let i = 1; i < exponent; i++)
    result *= number;
  return (result);
};

const factorial = function(number) {
	if (number <= 1)
    return (1);
  else
    return (number * factorial(number - 1));
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
