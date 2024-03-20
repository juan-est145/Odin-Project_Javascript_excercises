const getTheTitles = function(books) 
{
    return (books.filter((object) => "title" in object).map((object) => object.title));
};

//Alternative solution
/*const array = new Array;
    books.forEach(element => {
        if ("title" in element == true)
            array.push(element.title);
    });
    return (array);*/

// Do not edit below this line
module.exports = getTheTitles;
