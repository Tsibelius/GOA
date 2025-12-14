//                                               დავალება 1-ლი


// წინა გაკვეთილის საკლასო და საშინაო დავალებები 
// ატვირთული მაქვს


//                                               დავალება მე-2

// შექმენით ფუნქცია რომელიც შეამოწმებს არგუმენტად გადაცემული მნიშვნელიბა არის თუ არა პალინდრომე.

function isPalindrome(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    if (text === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log("დავალება მე-2 :")
console.log(isPalindrome("ana"));
console.log(isPalindrome("elene"));
console.log(isPalindrome("tekla"));


//                                               დავალება მე-3

// შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სტრინგიდან ხმოვნებს ჩაანაცვლებს
// და მათ მაგივრად *-ს გამოაჩენს.

function replaceVowels(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let ch = text[i];

        if (
            ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
            ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"
        ) {
            result += "*";
        } else {
            result += ch;
        }
    }

    return result;
}

console.log("დავალება მე-3 :")
console.log(replaceVowels("Hello World"));
console.log(replaceVowels("Javascript"));
console.log(replaceVowels("Programming"));


//                                               დავალება მე-4   

// შექმენით ფუნქცია რომელიც გადაცემულ სტრინგში სიმბოლოებს შეუცვლის ქეისებს.
// (რომელი ასოც წერია პატარად იმას დიდად დაწერს და პირიქით)

function swapCase(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let ch = text[i];

        if (ch === ch.toUpperCase()) {
            result += ch.toLowerCase();
        } else {
            result += ch.toUpperCase();
        }
    }

    return result;
}

console.log("დავალება მე-4 :")
console.log(swapCase("HeLLo"));
console.log(swapCase("JavaScript"));
console.log(swapCase("sWAPcASE"));


//                                               დავალება მე-5
                                           
// შექმენით ფუნქცია რომელსაც გადაეცემა სია.
// ამ სიაში უნდა იყოს სიები.
// და თითოეულ სიაში უნდა იყოს რამე სახელი და მეორე არგუმენტად რიცხვი.
// და ამ ფუნქციამ უნდა დააბრუნოს ისეთი სიები,
// რომლებშიც პირველ ინდექსზე მყოფი რიცხვის მნიშვნელობა იქნება 18-ზე მეტი.

function filterByAge(list) {
    let result = [];

    for (let i = 0; i < list.length; i++) {
        if (list[i][1] > 18) {
            result.push(list[i]);
        }
    }

    return result;
}

console.log("დავალება მე-5 :")
console.log(filterByAge([["გიორგი", 20], ["ანა", 17], ["ლუკა", 25]]));
console.log(filterByAge([["ნიკა", 18], ["სალომე", 19], ["დათო", 30]]));
console.log(filterByAge([["მარი", 15], ["ირაკლი", 22], ["თემო", 40]]));