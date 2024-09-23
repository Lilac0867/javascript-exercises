const palindromes = function (str) {
    let inc = 0;
    if(str.length % 2 !== 0) {
      inc = 1;
    }

    let startStr = str.toLowerCase().slice(0, (str.length/2));
    let endStr = str.toLowerCase().slice((str.length/2)+inc)
                                  .split('')
                                  .reverse()
                                  .toString()
                                  .replaceAll(',', '');

    if(startStr === endStr) {
      return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
