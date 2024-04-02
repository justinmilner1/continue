/**
 * This function calculates the nth number in the Fibonacci sequence.
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @returns {number} - The nth number in the Fibonacci sequence.
 */
function fib(n) {
   
    if (n <= 1) return n;
    return fib(n - 2) + fib(n - 1);
}

let d = repeat(5, "a");
console.log(d);

let e = factorial(3);
console.log(e);
