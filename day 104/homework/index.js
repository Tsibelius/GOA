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

