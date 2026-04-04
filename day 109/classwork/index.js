//           დავალება 1-ლი
console.log("დავალება 1-ლი :")
let i = 0;

do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 20);


//           დავალება მე-2

var list = ["apple", "giorgi", "kiwi", "luka", "pear", "plum"];
let count = 0;
let index = 0;

if (list.length > 0) {
    do {
       
        if (list[index].length % 2 === 0) {
            count++;
        }
        index++;
    } while (index < list.length);
}

console.log("დავალება მე-2 :")
console.log("ლუწი სიგრძის მქონე სტრინგების რაოდენობაა: " + count);


//           დავალება მე-3

console.log("დავალება მე-3 :")
var numbers = [2, 5, 8, 10, 3];

numbers.forEach(function(number) {
    let square = number * number;
    console.log(number + "-ის კვადრატი არის: " + square);
    
});

//         დავალება მე-4

const fruits = ["apple", "kiwi", "banana", "pear", "orange", "plum"];


fruits.forEach(function(word) {
     
    if (word.length > 4) {
        count++;
    }
});

console.log("დავალება მე-4 :")
console.log("4-ზე მეტი სიმბოლოსგან შემდგარი სიტყვების რაოდენობაა: " + count);