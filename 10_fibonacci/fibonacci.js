const fibonacci = function(index) {
    if (index == 1)
        return (1);
    else if (index == 0)
        return (0);
    else if (index < 0)
        return ("OOPS");
    return (fibonacci(index - 2) + fibonacci(index - 1));
};

// Do not edit below this line
module.exports = fibonacci;
