//                                    დავალება 1-ლი

// while loop-ის დახმარებით გამოიტანეთ რიცხვები 0-დან 10-მდე კონსოლში.

let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

//                                    დავალება მე-2

// while loop-ის დახმარებით გამოიტანეთ თქვენი სახელი 20-ჯერ კონსოლში.

let ii = 1;

while (ii <= 20) {
    console.log("Giorgi");
    ii++;
}

//                                    დავალება მე-3

// დაატრიალეთ while loop 1-დან 20-მდე და გამოიტანეთ კონსოლში ყველა ლუწი რიცხვი (გამოიყენეთ if else)

let num = 1;

while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num);
    } else {
        // აქ არაფერს ვწერთ, რადგან მხოლოდ ლუწები გვჭირდება და გვაინტერესებს.
    }
    num++;
}

//                                    დავალება მე-4

// 4) შექმენი 4 სია ,ერთ სიაში შეინახეთ სულ სტრინგები,მერე სიაში შეინახე სულ ინტეჯერები,
// მესამე სიაში შეინახეთ სულ float ები,და მეოთხე სიაში შეინახეთ სულ boolean ები,
// ასევე შექმენი ბოლოს მეხუთე სია სადაც შეინახავ ოთხივე ტიპის მონაცემს ერთად.


let strings = ["Giorgi", "Nino", "mariami", "ana" , "goga"];
let integers = [1, 2, 3, 4, 5];
let floats = [1.5, 2.7, 3.14, 4.9];
let booleans = [true, false, true, false];

let mixed = ["Hello", 42, 3.14, true];

console.log(strings);
console.log(integers);
console.log(floats);
console.log(booleans);
console.log(mixed);

