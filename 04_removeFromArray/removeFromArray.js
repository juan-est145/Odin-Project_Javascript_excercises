const removeFromArray = function(array, ...valueToErase) 
{
    const newArray = [];

    for (let index = 0; index < array.length; index++)
    {
        if (findFalseValue(array[index], valueToErase) === false)
            newArray[newArray.length] = array[index];
    }
    return (newArray);
};

function findFalseValue(arrayToSearch, valuesToErase)
{
    for (let i = 0; i < valuesToErase.length; i++) 
    {
        if (arrayToSearch === valuesToErase[i])
            return (true);
    }
    return (false);
}
// Do not edit below this line
module.exports = removeFromArray;
