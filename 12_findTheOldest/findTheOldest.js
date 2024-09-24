const findTheOldest = function(people) {
    const peopleAge = people.map((person) => {
        const name = person.name;
        const age = person.yearOfDeath - person.yearOfBirth;
        return {name, age};
    });

    const sortedAge = peopleAge.sort((a, b) => {
        // a is previous, b is current
        // - is ab, + is ba
        if(a.age > b.age) {
            return -1;
        } 
        return 1;
    });
    
    return sortedAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
