// =====================
// დავალება 1-ლი
// =====================

/*
Congratulations! That Special Someone has given you their phone number.
But WAIT, is it a valid number?

Your task is to write a function that verifies whether a given string contains
a valid British mobile (cell) phone number or not.

If the string is a valid UK number, return "In with a chance".
If it is invalid, or if you're given an empty string, return "Plenty more fish in the sea".

A number can be valid in the following ways:

Here in the UK, mobile numbers begin with "07" followed by 9 other digits, e.g. "07454876120".
Sometimes the number is preceded by the country code, the prefix "+44", which replaces the "0" in ‘07’, e.g. "+447454876120".
And sometimes you will find numbers with dashes in-between digits or on either side,
e.g. "+44--745---487-6120" or "-074-54-87-61-20-". As you can see, dashes may be consecutive.
*/

function validateNumber(str) {
    if (str === "") return "Plenty more fish in the sea";

    let cleaned = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "-") cleaned += str[i];
    }

    if (cleaned.startsWith("07") && cleaned.length === 11) return "In with a chance";
    if (cleaned.startsWith("+447") && cleaned.length === 13) return "In with a chance";

    return "Plenty more fish in the sea";
}
console.log("დავალება 1-ლი :");
console.log(validateNumber("07454876120"));
console.log(validateNumber("+44--745---487-6120"));
console.log(validateNumber("123"));


// =====================
// დავალება მე-2
// =====================

/*
Complete the solution so that the function will break up camel casing,
using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function breakCamelCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z") result += " ";
        result += str[i];
    }
    return result;
}
console.log("დავალება მე-2 :");
console.log(breakCamelCase("camelCasing"));
console.log(breakCamelCase("identifier"));


// =====================
// დავალება მე-3
// =====================

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced.
The input will be a non-negative integer.

Examples
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  --> 2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  --> 2 + 9 = 11  --> 1 + 1 = 2
*/

function digitalRoot(n) {
    while (n >= 10) {
        let sum = 0;
        let str = n.toString();
        for (let i = 0; i < str.length; i++) sum += Number(str[i]);
        n = sum;
    }
    return n;
}
console.log("დავალება მე-3 :");
console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(493193));


// =====================
// დავალება მე-4
// =====================

/*
Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:
i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

Examples
Program "iiisdoso" should return numbers [8, 64].
Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
*/

function parseDeadfish(data) {
    let value = 0;
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] === "i") value++;
        if (data[i] === "d") value--;
        if (data[i] === "s") value = value * value;
        if (data[i] === "o") result.push(value);
    }
    return result;
}
console.log("დავალება მე-4 :");
console.log(parseDeadfish("iiisdoso"));
console.log(parseDeadfish("iiisdosodddddiso"));


// =====================
// დავალება მე-5
// =====================

/*
You are given an array (which will have a length of at least 3, but could be very large)
containing integers. The array is either entirely comprised of odd integers
or entirely comprised of even integers except for a single integer N.

Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/

function findOutlier(arr) {
    let even = 0, odd = 0;
    for (let i = 0; i < 3; i++) {
        if (arr[i] % 2 === 0) even++;
        else odd++;
    }
    let lookForEven = odd > even;
    for (let i = 0; i < arr.length; i++) {
        if (lookForEven && arr[i] % 2 === 0) return arr[i];
        if (!lookForEven && arr[i] % 2 !== 0) return arr[i];
    }
}
console.log("დავალება მე-5 :");
console.log(findOutlier([2,4,6,8,11]));
console.log(findOutlier([1,3,5,6,7]));


// =====================
// დავალება მე-6
// =====================

/*
Write a method (or function, depending on the language) that converts a string
to camelCase, that is, all words must have their first letter capitalized
and spaces must be removed.

Examples (input --> output):
"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

function toCamelCase(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result += word[0].toUpperCase();
        for (let j = 1; j < word.length; j++) result += word[j];
    }
    return result;
}
console.log("დავალება მე-6 :");
console.log(toCamelCase("hello case"));
console.log(toCamelCase("camel case word"));


// =====================
// დავალება მე-8
// =====================
/*

Write a function that takes in a string of one or more words, and returns the same string,
but with all words that have five or more letters reversed (just like the name of this kata).
Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

Examples:
"Hey fellow warriors"  --> "Hey wollef sroirraw"
"This is a test"       --> "This is a test"
"This is another test" --> "This is rehtona test"
*/

function spinWords(sentence) {
    let words = sentence.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let finalWord = "";
        if (word.length >= 5) {
            for (let j = word.length - 1; j >= 0; j--) finalWord += word[j];
        } else finalWord = word;
        if (i > 0) result += " ";
        result += finalWord;
    }
    return result;
}
console.log("დავალება მე-8 :");
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));