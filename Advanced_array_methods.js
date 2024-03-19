const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array.filter(isOdd).map((e) => e * 3).reduce((total, currentItem) => total + currentItem));


function isOdd(number)
{
    return (number % 2 === 0? true : false);
}