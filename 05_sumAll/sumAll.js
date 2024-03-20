const sumAll = function(number1, number2) 
{
    const smallest = number1 < number2? number1 : number2;
    const biggest = number1 > number2? number1 : number2;
    if (smallest < 0 || Number.isInteger(smallest) === false || Number.isInteger(biggest) === false)
        return ("ERROR");
    else if (biggest === smallest + 1)
            return (biggest + smallest);
    else if (biggest === smallest)
        return (0);
    else
        return (biggest + sumAll(smallest, biggest - 1));
};

// Do not edit below this line
module.exports = sumAll;
