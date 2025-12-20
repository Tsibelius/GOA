 //                 დავალება 1-ლი 

// Introduction
// The first century spans from the year 1 up to and including the year 100,
// the second century - from the year 101 up to and including the year 200, etc.
//
// Task
// Given a year, return the century it is in.

function century(year) {
    let century = 0;

    if (year % 100 === 0) {
        century = year / 100;
    } else {
        century = (year - (year % 100)) / 100 + 1;
    }

    return century;
}


console.log("დავალება 1-ლი :")
console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(89));   // 1



//                დავალება მე-2 

// Description:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
//
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if (name[0] === "R" || name[0] === "r") {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}


console.log("დავალება მე-2 :")
console.log(areYouPlayingBanjo("Rick"));
console.log(areYouPlayingBanjo("martin"));
console.log(areYouPlayingBanjo("michael"));



//               დავალება მე-3 

// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    return i * 2;
}


console.log("დავალება მე-3 :")
console.log(doubleInteger(2));   // 4
console.log(doubleInteger(10));  // 20
console.log(doubleInteger(-3));  // -6



//                 დავალება მე-4

// Timmy & Sarah think they are in love, but around where they live,
// they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other
// has an odd number of petals it means they are in love.
//
// Write a function that will take the number of petals of each flower
// and return true if they are in love and false if they aren't.

function love(violet , rose) {
    if ((violet % 2 === 0 && rose % 2 !== 0) ||
        (violet % 2 !== 0 && rose % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log("დავალება მე-4 :")
console.log(love(1, 4)); // true
console.log(love(2, 2)); // false
console.log(love(0, 1)); // true



//                   დავალება მე-5
//
// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
//
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// You can assume that all values are integers. Do not mutate the input array.

function invert(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(-array[i]);
    }
    return result;
}

console.log("დავალება მე-5 :")
console.log(invert([1, 2, 3, 4, 5]));      // [-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5]));    // [-1, 2, -3, 4, -5]
console.log(invert([]));                   // []



//               დავალება მე-6

// There was a test in your class and you passed it. Congratulations!
//
// But you're an ambitious person. You want to know if you're better than the average student in your class.
//
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
//
// Return true if you're better, else false!

function betterThanAverage(classPoints, myPoints) {
    let total = 0;

    for (let i = 0; i < classPoints.length; i++) {
        total += classPoints[i];
    }

    let average = total / classPoints.length;

    if (myPoints > average) {
        return true;
    } else {
        return false;
    }
}

console.log("დავალება მე-6 :")
console.log(betterThanAverage([2, 3, 5, 5], 5));   // true
console.log(betterThanAverage([1, 1, 1, 1], 1));   // false
console.log(betterThanAverage([10, 20, 30], 15));  // false



//                  დავალება მე-7

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < str.length; i++) {
        let chai = str[i];
        let isVowel = false;

        for (let g = 0; g < vowels.length; g++) {
            if (chai === vowels[g]) {
                isVowel = true;
            }
        }

        if (isVowel) {
            count += 1;
        }
    }

    return count;
}

console.log("დავალება მე-7 :")
console.log(getCount("abracadabra"));  // 5
console.log(getCount("hidroelectrosadguri"))  // 8
console.log(getCount("paralelopipedi"));  // 7



//                  დავალება მე-8

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

function digitize(n) {
    let str = "" + n;   
    let result = [];

    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i] - "0"); 
    }

    return result;
}

console.log("დავალება მე-8 :")
console.log(digitize(35231));  // [1,3,2,5,3]
console.log(digitize(0));  // [0]
console.log(digitize(9876));   // [6,7,8,9]



//                 დავალება მე-9

// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

function solution(str, ending) {
    if (ending === "") {
        return true; 
    }

    let strEnd = str.slice(str.length - ending.length);

    if (strEnd === ending) {
        return true;
    } else {
        return false;
    }
}

console.log("დავალება მე-9 :")
console.log(solution("abc", "bc")); // true
console.log(solution("abc", "d"));  // false
console.log(solution("hello", "")); // true

