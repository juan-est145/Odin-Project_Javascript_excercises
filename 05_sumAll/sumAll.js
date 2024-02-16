const sumAll = function(number1, number2) 
{
    if (number1 < 0 || number2 < 0 || Number.isInteger(number1) === false 
    || Number.isInteger(number2) === false)
        return ("ERROR");
    else if (number2 === number1 + 1)
        return (number1 + number2);
    return (number2 + sumAll(number1, number2 - 1));
};

// Do not edit below this line
module.exports = sumAll;
