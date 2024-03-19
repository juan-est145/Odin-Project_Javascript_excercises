const palindromes = function (string) {
    string = string.toUpperCase();
    for(let i = 0; i < string.length; i++)
    {
        //if (string[i] < 'A' || string[i] > 'Z')
        if (!(string[i] >= 'A' && string[i] <= 'Z') && !(string[i] >= '0' && string[i] <= '9'))
            string = string.replaceAll(string[i], '');
    }
    const reverseString = string.split('').reverse().join('');
    return (string === reverseString? true : false);
};

// Do not edit below this line
module.exports = palindromes;
