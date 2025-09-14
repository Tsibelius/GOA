//                                            დავალება 1-ლი

// ორი რიცხვის ჯამი

let num1 = 5;
let num2 = 10;
console.log("დავალება 1-ლი"  + " " +  "ჯამი:", num1 + num2);


//                                            დავალება მე-2

// სახელის ჩაწერა alert-ში

let name = "გიორგი";
alert("სალამი" + " " + name + ", ბიძია გენაცვალოს (" + " " + " ;");


//                                            დავალება მე-3

// let, const, var მნიშვნელობები

let age = 20;     // let — ცვლადი რომლის მნიშვნელობა შეიძლება შეიცვალოს
const village = "მარტვილი";     // const — ცვლადი რომლის მნიშვნელობის შეცვლა შეუძლებელია
var city = "თბილისი";  // var — ძველი ვერისა არის let ის და იგივე მნიშვნელობა გააჩნია 
console.log("დავალება მე-3 :"  + " " + " age =", age, ", village =", village, ", city =", city);


//                                            დავალება მე-4

// ცვლადების შედარება
console.log("დავალება მე-4 :");

let x = 5;
x = 15; // შეიძლება შეიცვალოს
console.log(" ა)"  + " " + "let =", x);

var y = 10;
y = 25; // var-საც შეუძლია მნიშვნელობის შეცვლა რადგან let ის წინაპარია
console.log(" ბ)"  + " " + "var =", y);

const z = 30;
// z = 50; ეს არ იმუშავებს, რადგან const-ს მნიშვნელობის შეცვლა შეუძლებელია 
console.log(" გ)"  + " " + "const =", z);


//                                            დავალება მე-5

// მათემატიკური მოქმედებები

let a = 12;
let b = 4;
console.log("დავალება მე-5 :");
console.log(" ა)" + " " + "ჯამი:", a + b);
console.log(" ბ)" + " " + "სხვაობა:", a - b);
console.log(" გ)" + " " + "ნამრავლი:", a * b);
console.log(" დ)" + " " + "განაყოფი:", a / b);
console.log(" ე)" + " " + "ნაშთი:", a % b);
console.log(" ვ)" + " " + "ახარისხება:", a ** b);


//                                            დავალება მე-6

// ცვლადის ტიპის შეცვლა

console.log("დავალება მე-6 :");

let data = 100; // Number
console.log(" ა)" + " " + "Number:", data);

data = true; // Boolean
console.log(" ბ)" + " " + "Boolean:", data);

data = "ტექსტი"; // String
console.log(" გ)" + " " + "String:", data);

alert("ბიძი შეამოწმე კონსოლი (" + " " + " :");


//                                            დავალება მე-7

// 7. რიცხვის გაზრდა 10-ით

let number = 20;
number = number + 10; 
console.log("დავალება მე-7"  + " " + "შედეგი:", number);