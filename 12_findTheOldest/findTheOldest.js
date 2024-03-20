const findTheOldest = function(peopleArray) {
    return (peopleArray.reduce((oldest, currentPerson) => 
    {
        const oldestAge = "yearOfDeath" in oldest? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
        const currentPersonAge = "yearOfDeath" in currentPerson? currentPerson.yearOfDeath - currentPerson.yearOfBirth : new Date().getFullYear() - currentPerson.yearOfBirth;
        return (oldestAge > currentPersonAge ? oldest : currentPerson);
    }))
};

// Do not edit below this line
module.exports = findTheOldest;
