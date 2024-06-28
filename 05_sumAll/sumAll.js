const sumAll = function(start, end) {
    if(start < 0 || end < 0) {
        return "ERROR";
    }

    let sum = 0;
    const numArray = [start, end];
    numArray.sort();
    for(let i = numArray[0]; i <= numArray[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
