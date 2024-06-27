const removeFromArray = function(array, ...items) {
    if(array.length === 0) {
        return array;
    }

    const removedArray = array;
    for(let i = 0; i < removedArray.length; i++) {
        for(const item of items) {
            if(removedArray[i] === item) {
                removedArray.splice(i, 1);
                i--; // Keeps program from skipping the next index
            }
        }
    }
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
