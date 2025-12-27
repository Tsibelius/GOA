//             დავალება 1-ლი

// Implement a function which convert the given boolean value
// into its string representation.
//
// Note: Only valid inputs will be given.

function booleanToString(g) {
    if (g === true) {
        return "true";
    } else {
        return "false";
    }
}

console.log("დავალება 1-ლი :")
console.log(booleanToString(true));   // "true"
console.log(booleanToString(false));  // "false"



//               დავალება მე-2

// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.
//
// Note: input will never be an empty string

function fakeBin(y) {
    let result = "";

    for (let i = 0; i < y.length; i++) {
        if (y[i] < "5") {
            result += "0";
        } else {
            result += "1";
        }
    }

    return result;
}

console.log("დავალება მე-2 :")
console.log(fakeBin("45385593107843568")); // "01011110001100111"
console.log(fakeBin("509321967506747"));   // "101000111101101"
console.log(fakeBin("366058562030849490134388085")); // "011011110000101010000011011"



//              დავალება მე-3

// Instructions
// This function takes two numbers as parameters, the first number being the coefficient,
// and the second number being the exponent.
//
// Your function should multiply the two numbers, and then subtract 1 from the exponent.
// Then, it has to return an expression (like 28x^7).
// "^1" should not be truncated when exponent = 2.
//
// For example:
//
// 
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8.
// It should output "56x^7", the first number 56 being the product of the two numbers,
// and the second number being the exponent minus 1.
//
// derive(5, 9) --> this should output "45x^8"

function derive(coefficient, exponent) {
    let newCoefficient = coefficient * exponent;
    let newExponent = exponent - 1;

    let result = newCoefficient + "x^" + newExponent;
    return result;
}

console.log("დავალება მე-3 :")
console.log(derive(7, 8)); // "56x^7"
console.log(derive(5, 9)); // "45x^8"
console.log(derive(2, 2)); // "4x^1"



//            დავალება მე-4 :
//
// Write a function that will compare two values, one will be a number and one will be a string.
// Return true if they are the same character (regardless of their different data types)
// and return false if they are not.
//
// To make this challange harder and to promp the challenger to read up about coercion
// I have disabled some of the built in methods including
// .toString(), .join(), .split(), parseInt and .Number().

function add(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

console.log("დავალება მე-4 :")
console.log(add(1, "1"));  // true
console.log(add(5, "5"));  // true
console.log(add(3, "4"));  // false
console.log(add(0, "0"));  // true



//              დავალება მე-5
//
// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log("დავალება მე-5 :")
console.log(solution("world")); // "dlrow"
console.log(solution("word"));  // "drow"
console.log(solution("giorgi")); // "igroig"



//              დავალება მე-6
//
// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels
// from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string
// with all vowels removed.
//
// For example, the string "This website is for losers LOL!"
// would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    let result = "";
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        let isVowel = false;

        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                isVowel = true;
            }
        }

        if (isVowel === false) {
            result += str[i];
        }
    }

    return result;
}

console.log("დავალება მე-6 :")
console.log(disemvowel("join Goa become chad")); // "jn G bcm chd"



//              დავალება მე-7 
//
// Complete the method that takes a boolean value
// and return a "Yes" string for true,
// or a "No" string for false.

function boolToWord(b) {
    if (b === true) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log("დავალება მე-7 :")
console.log(boolToWord(true));   // "Yes"
console.log(boolToWord(false));  // "No"



//              დავალება მე-8

// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    let length = names.length;

    if (length === 0) {
        return "no one likes this";
    }

    if (length === 1) {
        return names[0] + " likes this";
    }

    if (length === 2) {
        return names[0] + " and " + names[1] + " like this";
    }

    if (length === 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    }

    return names[0] + ", " + names[1] + " and " + (length - 2) + " others like this";
    
    
}

