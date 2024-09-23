const palindromes = function (str) {
  let string = str.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Need to figure out way to replace non letter, non whitespace characters w/ regex
  console.log(string);
  let inc = 0;
  if(string.length % 2 !== 0) {
    inc = 1;
  }

  let startStr = string.toLowerCase().slice(0, (string.length/2));
  let endStr = string.toLowerCase().slice((string.length/2)+inc)
                                .split('')
                                .reverse()
                                .toString()
                                .replaceAll(',', '');
  console.log(startStr + ' ' + endStr);

  if(startStr === endStr) {
    return true;
  }
};

// Do not edit below this line
module.exports = palindromes;
