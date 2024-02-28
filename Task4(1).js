const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Print odd numbers in an array
arr.forEach(function(num) {
    if (num % 2 !== 0) console.log(num);
});


(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) console.log(num);
    });
})(arr);

// 2. Convert all the strings to title caps in a string array
const titleCaps = arr => arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

console.log(titleCaps(["hello", "world"]));


const titleCapsIIFE = (function(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
})(["hello", "world"]);

console.log(titleCapsIIFE);

// 3. Sum of all numbers in an array
const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum(arr));


const sumIIFE = (function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
})(arr);

console.log(sumIIFE);

// 4. Return all the prime numbers in an array
const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

const primes = arr.filter(isPrime);

console.log(primes);


const primesIIFE = (function(arr) {
    return arr.filter(num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
})(arr);

console.log(primesIIFE);

// 5. Return all the palindromes in an array
const isPalindrome = str => str === str.split("").reverse().join("");

const palindromes = arr.filter(isPalindrome);

console.log(palindromes);


const palindromesIIFE = (function(arr) {
    return arr.filter(str => str === str.split("").reverse().join(""));
})(arr);

console.log(palindromesIIFE);

// 6. Return median of two sorted arrays of the same size.
const median = (arr1, arr2) => {
    const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(mergedArr.length / 2);
    return mergedArr.length % 2 !== 0 ? mergedArr[mid] : (mergedArr[mid - 1] + mergedArr[mid]) / 2;
};

console.log(median([1, 3, 5], [2, 4, 6]));


const medianIIFE = (function(arr1, arr2) {
    const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = Math.floor(mergedArr.length / 2);
    return mergedArr.length % 2 !== 0 ? mergedArr[mid] : (mergedArr[mid - 1] + mergedArr[mid]) / 2;
})([1, 3, 5], [2, 4, 6]);

console.log(medianIIFE);

// 7. Remove duplicates from an array
const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


const removeDuplicatesIIFE = (function(arr) {
    return [...new Set(arr)];
})([1, 2, 2, 3, 4, 4, 5]);

console.log(removeDuplicatesIIFE);

// 8. Rotate an array by k times

const rotateArray = (arr, k) => {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));


const rotateArrayIIFE = (function(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
})([1, 2, 3, 4, 5], 2);

console.log(rotateArrayIIFE);
