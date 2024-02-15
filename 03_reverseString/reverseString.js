const reverseString = function(stringInput) 
{
    let returnString = "";
    for (let index = stringInput.length - 1; index >= 0; index--) 
    {
        returnString += stringInput[index];
    }
    return (returnString);
};

// Do not edit below this line
module.exports = reverseString;
