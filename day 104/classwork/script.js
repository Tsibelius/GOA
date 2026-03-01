// =====================================================
//           დავალება 1-ლი
// =====================================================
// 5-დან 20-მდე რენდომულად გამოიტანეთ რიცხვები

let randomNumber = Math.floor(Math.random() * 16) + 5;

console.log(randomNumber);


// =====================================================
//              დავალება მე-2
// =====================================================
// შექმენით ობიექტი სადაც შეინახავთ მანქანის ინფორმაციას,
// შიგნით დაამატეთ მეთოდი, რომელიც ობიექტის შიგნით არსებულ
// ინფორმაციას გაერთიანებს და კონსოლში გამოიტანს.


let impala = {

    brand: "Chevrolet",
    model: "Impala",
    year: 1967,
    color: "Black",
    owner: "Dean Winchester",

    showInfo: function() {

        console.log(
            "ეს არის " + impala.year + " წლის " +
            impala.brand + " " + impala.model +
            ", ფერი: " + impala.color +
            ". მფლობელი: " + impala.owner
        );

    }

};

impala.showInfo();


// =====================================================
//               დავალება მე-3
// =====================================================
// შექმენით ობიექტი სადაც იქნება აუცილებლად მოსწავლის სახელი,
// ასაკი, და ქულები რომლებიც სიაში ეწერება.
// ასევე შექმენით მეთოდი რომელიც გამოითვლის ქულების საშუალოს.
// და მეორე მეთოდი რომელიც მინიმალურ ქულას დააბრუნებს.

let student = {

    name: "Giorgi",
    age: 15,
    scores: [85, 90, 78, 92, 88],

    
    getAverage: function() {

        let sum = 0;

        for (let i = 0; i < student.scores.length; i++) {
            sum += student.scores[i];
        }

        let average = sum / student.scores.length;

        return average;
    },

    
    getMinScore: function() {

        let min = student.scores[0];

        for (let i = 1; i < student.scores.length; i++) {

            if (student.scores[i] < min) {
                min = student.scores[i];
            }

        }

        return min;
    }

};

console.log("ქულების საშუალო არის:", student.getAverage());
console.log("მინიმალური ქულა არის:", student.getMinScore());