const repeatString = function(stringInput, numberOfRepetions) 
{
    let stringResult = "";
    if (numberOfRepetions < 0)
        return ("ERROR");
  for (let index = 0; index < numberOfRepetions; index++) 
  {
    stringResult += stringInput;
  }
  return (stringResult);
};

// Do not edit below this line
module.exports = repeatString;
