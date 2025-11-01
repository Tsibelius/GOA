console.log("--------&_&--------")

// შექმენი ერთი სია, სადაც მოათავსებთ განსხვავებული ტიპის ელემენტებს, 5-ზე მეტი ელემენტი იყოს სიაში

let mixedList = [25, "გიორგი", true, 3.14, false , "яблоко", "ხაჭაპური"];

console.log("-----------------")


// --- გამოიტანეთ სიის თითოეული ელემენტი ცალ-ცალკე

console.log(mixedList[0]);
console.log(mixedList[1]);
console.log(mixedList[2]);
console.log(mixedList[3]);
console.log(mixedList[4]);
console.log(mixedList[5]);
console.log(mixedList[6]);

console.log("----------------")

// --- გამოიტანე სიის თითოეული ელემენტი for loop-ის გამოყენებით

for (let i = 0; i < mixedList; i++) {
    console.log(mixedList[i]);
}

console.log("----------------")

// --- გამოიტანე სიის თითოეული ელემენტი while loop-ის გამოყენებით

let index = 0;
while (index <= 6 ) {
    console.log(mixedList[index]);
    index++;
} 
console.log("----------------")
console.log("--------&_&---------")