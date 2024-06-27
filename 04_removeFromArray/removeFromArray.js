const removeFromArray = function(array, remove) {
    if(array.length === 0) {
        return array;
    }

    const removedArray = array;
    for(let i = 0; i < removedArray.length; i++) {
        if(removedArray[i] === remove) {
            removedArray.splice(i, 1);
        }
    }
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
