const fibonacci = function(number) {
    const num = parseInt(number);
    if(num === 0) {
        return 0;
    } else if(num < 0) {
        return 'OOPS';
    }
    const fib = [1, 1];
    for(let i = 2; i < num; i++) {
        fib.push(fib[i-1] + fib[i-2]);
    }
    return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
