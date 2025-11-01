//                                               დავალება 1-ლი

// მოცემულია სია:
// colors = ['red', 'green', 'blue', 'yellow']
// შეცვალე ისე, რომ პირველი ელემენტი შეცვალო "DarkRed" ით და ბოლო ელემენტი შეცვალო "Orange" ით

let colors = ['red', 'green', 'blue', 'yellow'];
colors[0] = 'DarkRed';
colors[3] = 'Orange';
console.log('დავალება 1-ლი : ', colors);


//                                               დავალება მე-2

// მოცემულია სია:
// fruits = ['apple', 'banana', 'cherry', 'date', 'fig']
// შეცვალე სიის მესამე ელემენტი 'orange' ით. სიის ბოლო ელემენტი "cucumber" ით და სიის მეოთხე ელემენტი "potato" ით

let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
fruits[2] = 'orange';
fruits[3] = 'potato';
fruits[4] = 'cucumber';
console.log('დავალება მე-2 :', fruits);


//                                               დავალება მე-3

// მოცემულია სია:
// numbers = [10, 25, 30, 48, 50, 64 , 70 , 87]
// დაალაგე რიცხვების თანმიმდევრობა: 10 20 30 ... 80

let numbers = [10, 25, 30, 48, 50, 64, 70, 87];
numbers[1] = 20;
numbers[3] = 40;
numbers[5] = 60;
numbers[7] = 80;
console.log('დავალება მე-3 :', numbers);


//                                               დავალება მე-4

// მოცემულია სია:
// days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// შეცვალე ისე, რომ პირველი ორი დღე შეიცვალოს 'Weekend1' და 'Weekend2' მნიშვნელობებით.

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
days[0] = 'Weekend1';
days[1] = 'Weekend2';
console.log('დავალება მე-4 :', days);


//                                               დავალება მე-5

// მოცემულია სია:
// fruits = ['apple', 'banana', 'cherry']
// დაბეჭდე თითოეული ელემენტი ინდექსების გამოყენებით ცალ ცალკე.

let fruits2 = ['apple', 'banana', 'cherry'];
console.log = ("დავალება მე-5 :")
console.log( fruits2[0]);
console.log( fruits2[1]);
console.log( fruits2[2]);


//                                               დავალება მე-6

// მოცემულია მასივი:
// const colors = ['red', 'green', 'blue', 'yellow'];
// გამოიტანე ყველა ფერი for ციკლის გამოყენებით

const colors2 = ['red', 'green', 'blue', 'yellow'];
for (let i = 0; i <= 3; i++) {
  console.log('დავალება მე-6 :', colors2[i]);
}


//                                               დავალება მე-7

// მოცემულია სია:
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
// შენი დავალებაა რომ კონსოლში გამოიტანო თითოეული ელემენტი ცალ ცალკე გამოიყენე while loop

let days2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
let i7 = 0;
while (i7 <= 3) {
  console.log('დავალება მე-7 :', days2[i7]);
  i7++;
}

//                                               დავალება მე-8

// შექმენი სია,სადაც მოათავსებთ მხოლოდ რიცხვებს,
// ტერმინალში გამოიტანეთ სიაში მყოფი მხოლოდ ლუწი რიცხვები (შეასრულეთ ორივეთი for და while)

let nums1 = [2, 5, 8, 11, 14, 17, 20];

// for loop :

for (let i = 0; i <= 6; i++) {
  if (nums1[i] % 2 === 0) {
    console.log('დავალება მე-8 :-: for loop : ', nums1[i]);
  }
}

// while loop :

let i8 = 0;
while (i8 <= 6) {
  if (nums1[i8] % 2 === 0) {
    console.log('დავალება მე-8 :-: while loop :', nums1[i8]);
  }
  i8++;
}


//                                               დავალება მე-9

// შექმენი სია,სადაც მოათავსებთ მხოლოდ რიცხვებს,
// ტერმინალში გამოიტანეთ სიაში მყოფი მხოლოდ კენტი რიცხვები (შეასრულეთ ორივეთი for და while)

let nums2 = [2, 5, 8, 11, 14, 17, 20];

// for loop

for (let i = 0; i <= 6; i++) {
  if (nums2[i] % 2 !== 0) {
    console.log('დავალება მე-9 :-: for loop :', nums2[i]);
  }
}

// while loop

let i9 = 0;
while (i9 <= 6) {
  if (nums2[i9] % 2 !== 0) {
    console.log('დავალება მე-9 :-: while loop :', nums2[i9]);
  }
  i9++;
}


//                                               დავალება მე-11

// შექმენი ცვლადის სადაც შეინახავ სტრინგს --> "სადგური"
// შენი დავალებაა რომ ინდექსების გამოყენებით ასევე while და for ციკლის გამოყენებით ტერმინალში გამოიტანო თითოეული ასო

let word = "სადგური";
console.log("დავალება მე-11 :")
console.log(word[0]);
console.log( word[1]);
console.log( word[2]);
console.log( word[3]);
console.log( word[4]);
console.log( word[5]);
console.log( word[6]);

// for loop

for (let i = 0; i <= 6; i++) {
  console.log('დავალება მე-11 :-: for loop :', word[i]);
}

// while loop

let i11 = 0;
while (i11 <= 6) {
  console.log('დავალება მე-11 :-: while loop :', word[i11]);
  i11++;
}