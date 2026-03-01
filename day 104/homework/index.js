// =====================================================
// დავალება 1-ლი
// =====================================================

// შექმენით ობიექტი რომელშიც იქნება ოთხი მეთოდი 
// (შეკრება, გამოკლება, გამრავლება, გაყოფა).
// თითოეულ მათგანს ჰქონდეს ორი პარამეტრი.

let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));



// =====================================================
// დავალება მე-2
// =====================================================

// შექმენით ობიექტი ფილმის ინფორმაციით და შეფასების განახლება

let movie = {
    title: "Supernatural",
    year: 2005,
    rating: 8,
    notRated: function() {
        return "თქვენ არ შეგიფასებიათ ფილმი";
    }
};

let answer = prompt("გსურთ ფილმის შეფასება? (დიახ/არა)");

if (answer === "დიახ") {
    let newRating = prompt("შეიყვანეთ ახალი შეფასება:");
    movie.rating = Number(newRating);
    console.log("განახლებული შეფასება:", movie.rating);
} else {
    console.log(movie.notRated());
}



// =====================================================
// დავალება მე-3
// =====================================================

// შექმენით ობიექტი თქვენი ინფორმაციით.
// მეთოდი რომელიც ასაკს გაზრდის 1-ით.

let person = {
    name: "გიორგი",
    age: 18,
    increaseAge: function() {
        this.age++;
    }
};

person.increaseAge();
console.log(person.age);



// =====================================================
//               დავალება მე-4
// =====================================================
// შექმენით ფუნქცია, რომელიც რენდომულად აარჩევს რიცხვს 1-დან 10-მდე.
// და მომხმარებელმა უნდა გამოიცნოს ეს რიცხვი.
// ამისთვის მას უნდა ჰქონდეს 3 ცდა.

function guessGame() {

    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 3;

    while (attempts > 0) {

        let userGuess = Number(prompt("გამოიცანი რიცხვი 1-დან 10-მდე. დარჩენილი ცდებია : " + attempts));

        if (userGuess === secretNumber) {
            console.log("გილოცავ! სწორად გამოიცანი ");
            return;
        } else {
            console.log("არასწორია ");
        }

        attempts--;
    }

    console.log("ცდები ამოიწურა. სწორი რიცხვი იყო: " + secretNumber);
}

guessGame();



// =====================================================
//               დავალება მე-5
// =====================================================
// შექმენით ობიექტი, სადაც იქნება სია.
// სიაში უნდა იყოს სხვადასხვა ტიპის მონაცემები და მინიმუმ 10 ელემენტი.
// შიგნით შექმენით ისეთი მეთოდი რომელიც მხოლოდ Number ტიპის მონაცემებს
// გადაამრავლებს ერთმანეთზე.

let dataObject = {

    items: [10, "Hello", 5, true, 2, "GOA", 3, false, 4, null],

    multiplyNumbers: function() {

        let result = 1;

        for (let i = 0; i < dataObject.items.length; i++) {

            if (typeof dataObject.items[i] === "number") {
                result *= dataObject.items[i];
            }

        }

        return result;
    }

};

console.log("Number ტიპის ელემენტების ნამრავლი არის:", dataObject.multiplyNumbers());