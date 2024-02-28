const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const stringArr = ["apple", "banana", "orange", "grape"];
const numArr = [1, 2, 3, 4, 5];

// 1. Print odd numbers in an array
const printOddNumbers = arr => arr.forEach(num => {
    if (num % 2 !== 0) console.log(num);
});

printOddNumbers(arr);

// 2. Convert all the strings to title caps in a string array
const toTitleCaps = arr => arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

console.log(toTitleCaps(stringArr));

// 3. Sum of all numbers in an array
const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum(numArr));

// 4. Return all the prime numbers in an array
const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

const primes = arr.filter(isPrime);

console.log(primes);

// 5. Return all the palindromes in an array
const isPalindrome = str => str === str.split("").reverse().join("");

const palindromes = arr.filter(isPalindrome);

console.log(palindromes);
