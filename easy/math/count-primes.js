/**
 * Given an integer n, return the number of prime numbers that are strictly less than n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let primes = 0;
    let numbers = [];

    for (let i = 0; i <= n; i++) {
        numbers.push(i);
    }

    
    for (let i = 2; i < n; i++) {
        let prime = numbers[i];
        if (prime != 'visited') {
            primes++;
            for (let j = i * i; j < numbers.length; j+= i) {
                numbers[j] = 'visited';
            }
        }
    }

    return primes;
};