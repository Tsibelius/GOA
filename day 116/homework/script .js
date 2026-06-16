// ==========================================
//                 // FOR LOOP
// ==========================================

// დავალება 1: 50-მდე ყველა ლუწი რიცხვი შეკრიბეთ და გადაამრავლეთ კენტების ჯამზე.

console.log("-----__&__-----");
console.log("დავალება 1:");

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenSum = evenSum + i; 
    } else {
        oddSum = oddSum + i;   
    }
}
let totalResult = evenSum * oddSum;
console.log("ლუწების და კენტების ჯამის ნამრავლი: " + totalResult);


// დავალება 2: for loop - ის გამოყენებით შეკრიბეთ ყველა კენტი რიცხვი (მაგალითად 50-მდე).

console.log("-----__&__-----");
console.log("დავალება 2:");

let sumOfOdds = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        sumOfOdds = sumOfOdds + i;
    }
}
console.log("50-მდე კენტი რიცხვების ჯამი: " + sumOfOdds);


// დავალება 3: შექმენით ცვლადი რიცხვით, შეაბრუნეთ ის და დააბრუნეთ შედეგი.

console.log("-----__&__-----");
console.log("დავალება 3:");

let originalNumber = 12345;
let numberToString = String(originalNumber);
let reversedString = "";

// ციკლით უკუღმა ვუვლით ტექსტს
for (let i = numberToString.length - 1; i >= 0; i--) {
    reversedString = reversedString + numberToString[i];
}
let reversedNumber = Number(reversedString);
console.log("საწყისი: " + originalNumber + " ---> შებრუნებული: " + reversedNumber);


// ==========================================
//             // FUNCTION DECLARATION
// ==========================================

// დავალება 4: ფუნქცია, რომელიც ამოწმებს რიცხვი მარტივია (Prime) თუ არა.
console.log("-----__&__-----");
console.log("დავალება 4:");

function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}
console.log("არის თუ არა 7 მარტივი რიცხვი?: " + isPrime(7));
console.log("არის თუ არა 10 მარტივი რიცხვი?: " + isPrime(10));


// დავალება 5: ფუნქცია, რომელიც ტექსტს ამოწმებს პალინდრომია თუ არა.

console.log("-----__&__-----");
console.log("დავალება 5:");

function isPalindrome(text) {
    let reversedText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText = reversedText + text[i];
    }
    return text === reversedText;
}
console.log("არის თუ არა 'აჰა' პალინდრომი?: " + isPalindrome("აჰა"));
console.log("არის თუ არა 'სოკრატე' პალინდრომი?: " + isPalindrome("სოკრატე"));


// ==========================================
//             // FUNCTION EXPRESSION
// ==========================================

// დავალება 6: ფუნქცია, რომელიც აბრუნებს სიის რიცხვების საშუალოს.

console.log("-----__&__-----");
console.log("დავალება 6:");

const calculateAverage = function(numbersList) {
    let total = 0;
    for (let i = 0; i < numbersList.length; i++) {
        total = total + numbersList[i];
    }
    return total / numbersList.length;
};
console.log("საშუალო არითმეტიკული: " + calculateAverage([10, 20, 30, 40]));


// დავალება 7: ფუნქცია, რომელიც აბრუნებს ტექსტში სიტყვების რაოდენობას.

console.log("-----__&__-----");
console.log("დავალება 7:");

const countWords = function(largeText) {
    let wordsArray = largeText.split(" ");
    return wordsArray.length;
};
console.log("სიტყვების რაოდენობა: " + countWords("გიყვარდეს მოყვასი , ვითარცა თავი შენი"));


// დავალება 8: ფუნქცია, რომელიც არგუმენტად გადაცემული სიიდან ამოშლის დუბლიკატებს.

console.log("-----__&__-----");
console.log("დავალება 8:");

const removeDuplicates = function(list) {
    let uniqueList = [];
    for (let i = 0; i < list.length; i++) {
        
        if (uniqueList.indexOf(list[i]) === -1) {
            uniqueList.push(list[i]);
        }
    }
    return uniqueList;
};
console.log("სიის უნიკალური ვერსია: " + removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5]));


// ==========================================
//                 // ARROW FUNCTION
// ==========================================

// დავალება 9: ამოწმებს რიცხვი დადებითია თუ უარყოფითი (მაქსიმალურად მოკლე, ტერნარით).

console.log("-----__&__-----");
console.log("დავალება 9:");

var checkSign = (num) => num >= 0 ? "დადებითია" : "უარყოფითია";
console.log("რიცხვი 5 არის: " + checkSign(5));
console.log("რიცხვი -3 არის: " + checkSign(-3));


// დავალება 10: აბრუნებს სიიდან ყველაზე ხშირად განმეორებად რიცხვს.

console.log("-----__&__-----");
console.log("დავალება 10:");

const mostFrequent = (arr) => {
    let maxCount = 0;
    let mostFrequentElement;
    
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            mostFrequentElement = arr[i];
        }
    }
    return mostFrequentElement;
};
console.log("ყველაზე ხშირი რიცხვია: " + mostFrequent([1, 3, 2, 3, 4, 3, 5, 1]));


// დავალება 11: აბრუნებს სიიდან ყველაზე პატარა რიცხვს (Math.min-ის გარეშე).

console.log("-----__&__-----");
console.log("დავალება 11:");

const findMin = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};
console.log("ყველაზე პატარა რიცხვია: " + findMin([15, 4, 23, 2, 8, 42]));


// ==========================================
//                     // MAP()
// ==========================================

// დავალება 12: სტრინგების სიის გადაყვანა UPPER CASE-ში.

console.log("-----__&__-----");
console.log("დავალება 12:");

let lowerStrings = ["ვაშლი", "მსხალი", "ატამი"];
let upperStrings = lowerStrings.map((str) => str.toUpperCase());
console.log(upperStrings);


// დავალება 13: პირობა აორთქლდა გონებიდან ჩემიდან
console.log("-----__&__-----");
console.log("დავალება 13:");

let mixedList = ["HELLO", 16, "World", 7, 9, true, 25, "JS", null, 12, false, 4, "King", 2, 49];

let processedList = mixedList.map((el) => {
    if (typeof el === "string") {
        return el.toLowerCase();
    }
    if (typeof el === "number") {
        
        if (Math.sqrt(el) % 1 !== 0) {
            return el * el; 
        }
    }
    return el; 
});
console.log(processedList);


// დავალება 14: მანქანების ობიექტების სიიდან მხოლოდ ბრენდების წამოღება.

console.log("-----__&__-----");
console.log("დავალება 14:");

let carsList = [
    { brand: "Chevrolet", model: "Impala" },
    { brand: "Ford", model: "Mustang" },
    { brand: "BMW", model: "M5" }
];
let brandsOnly = carsList.map((car) => car.brand);
console.log(brandsOnly);


// ==========================================
//                 // FOREACH()
// ==========================================

// დავალება 15: მინიმუმ 6 ელემენტიანი სია. გამოიტანე თავად ელემენტი და მისი ტიპი.

console.log("-----__&__-----");
console.log("დავალება 15:");

let sixElements = ["ტექსტი", 45, true, { name: "ობიექტი" }, undefined, [1, 2]];

sixElements.forEach((element) => {
    console.log("ელემენტი: " + element + " --- ტიპი: " + typeof element);
});


// დავალება 16: 10 სტრინგიდან მხოლოდ იმათი გამოტანა, რაც იწყება დიდი ასოთი (Upper case).

console.log("-----__&__-----");
console.log("დავალება 16:");

let tenStrings = ["თბილისი", "ბათუმი", "ქუთაისი", "სოხუმი", "რუსთავი", "გორი", "ფოთი", "ზუგდიდი", "ხაშური", "მესტია"];

tenStrings.forEach((str) => {
    
    if (str[0] === str[0].toUpperCase()) {
        console.log("დიდი ასოთი იწყება: " + str);
    }
});

// ==========================================
//                       // FILTER
// ==========================================

//                       დავალება მე-18
// პირობა: შექმენი სია სადაც ეწერება მინიმუმ 15 განსხვავებული რიცხვი. 
// ახალ სიაში დააბრუნეთ მხოლოდ ისეთი რიცხვები რომლებიც 18-დან 40-მდე შუალედშია.

console.log("-----__&__-----");
console.log("დავალება მე-18:");

let numbersArray = [5, 12, 18, 22, 30, 45, 39, 14, 25, 50, 33, 17, 40, 29, 8];
let filteredNumbers = numbersArray.filter((num) => {
    return num >= 18 && num <= 40;
});
console.log("18-დან 40-მდე რიცხვები: " + filteredNumbers);


//                       დავალება მე-19
// პირობა: შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. 
// დააბრუნეთ მხოლოდ სტრინგ ტიპის მონაცემები.

console.log("-----__&__-----");
console.log("დავალება მე-19:");

let randomData = ["ვაშლი", 42, "კოდი", true, "ჯავასკრიპტი", { name: "გიორგი" }, "მეფე"];
let stringsOnly = randomData.filter((item) => {
    return typeof item === "string";
});
console.log("მხოლოდ სტრინგები: " + stringsOnly);


//                       დავალება მე-20
// პირობა: შექმენით სია სადაც იქნება დადებითიც და უარყოფითი რიცხვებიც. 
// გამოიტანეთ მხოლოდ უარყოფითი რიცხვები.

console.log("-----__&__-----");
console.log("დავალება მე-20:");

let mixedNumbers = [10, -5, 23, -12, 0, -8, 45, -1];
let negativeNumbers = mixedNumbers.filter((num) => {
    return num < 0;
});
console.log("მხოლოდ უარყოფითი რიცხვები: " + negativeNumbers);


// ==========================================
//                    // SWITCH / CASE
// ==========================================

//                       დავალება მე-21

// პირობა: შექმენით ცვლადი და შეინახეთ ნებისმიერი რიცხვი. 
// switch / case გამოყენებით დააბრუნეთ შესაბამისი თვე (თუ 1-12-შუალედში არაა მაშინ default-ზე გადავიდეს)

console.log("-----__&__-----");
console.log("დავალება მე-21:");

let monthNumber = 5; 
let monthName = "";

switch (monthNumber) {
    case 1: monthName = "იანვარი"; break;
    case 2: monthName = "თებერვალი"; break;
    case 3: monthName = "მარტი"; break;
    case 4: monthName = "აპრილი"; break;
    case 5: monthName = "მაისი"; break;
    case 6: monthName = "ივნისი"; break;
    case 7: monthName = "ივლისი"; break;
    case 8: monthName = "აგვისტო"; break;
    case 9: monthName = "სექტემბერი"; break;
    case 10: monthName = "ოქტომბერი"; break;
    case 11: monthName = "ნოემბერი"; break;
    case 12: monthName = "დეკემბერი"; break;
    default: monthName = "ასეთი თვე ვერ აღმოვიცან პირობასა შინა!";
}
console.log("შესაბამისი თვე არს: " + monthName);


//                       დავალება მე-22

// პირობა: შექმენით ცვლადი სადაც შეინახავთ ნებისმიერ რიცხვს. 
// თუ ეს რიცხვი არის 1-დან 18-მდე მაშინ დააბრუნეთ 'არასრულწლოვანი'. 
// თუ 18+ არის მაშინ 'ზრდასრული, სხვა შემთხვევაში 'ასეთი ასაკი არ არსებობს'

console.log("-----__&__-----");
console.log("დავალება მე-22:");

let ageValue = 15;
let ageStatus = "";


switch (true) {
    case (ageValue >= 1 && ageValue < 18):
        ageStatus = "არასრულწლოვანი";
        break;
    case (ageValue >= 18):
        ageStatus = "ზრდასრული";
        break;
    default:
        ageStatus = "ასეთი ასაკი არ არსებობს";
}
console.log("სტატუსი: " + ageStatus);


//                       დავალება მე-23

// პირობა: შექმენით ცვლადი სადაც შეინახავთ სტრინგს. ამ სტრინგის სიგრძე თუ არის 8-მდე 
// მაშინ დააბრუნეთ 'პაროლი არის მოკლე'. თუ 8-დან 12 შუალედშია მაშინ 'პაროლი არის კარგი სიგრძის'. 
// სხვა შემთხვევაში 'პაროლი არის იდეალური ზომის'.

console.log("-----__&__-----");
console.log("დავალება მე-23:");

let userPassword = "mySecurePassword123";
let passwordCheckResult = "";

switch (true) {
    case (userPassword.length < 8):
        passwordCheckResult = "პაროლი არის მოკლე";
        break;
    case (userPassword.length >= 8 && userPassword.length <= 12):
        passwordCheckResult = "პაროლი არის კარგი სიგრძის";
        break;
    default:
        passwordCheckResult = "პაროლი არის იდეალური ზომის";
}
console.log("პაროლის შემოწმება: " + passwordCheckResult);



//                       დავალება მე-25

// პირობა: შექმენით სია. თუ ამ სიის სიგრძე არის 5-ზე მეტი, 
// მაშინ ბოლო ელემენტი ამოშალეთ. თუ ნაკლებია მაშინ ჩაამატეთ თქვენი სახელი.

console.log("-----__&__-----");
console.log("დავალება მე-25:");

let customList = ["ვაშლი", "ბანანი", "ატამი", "მსხალი", "ფორთოხალი", "კივი"];


customList.length > 5 ? customList.pop() : customList.push("გიორგი");
console.log("განახლებული სია: " + customList);


//                       დავალება მე-26

// პირობა: შექმენით ცვლადი სადაც შეინახავთ ნებისმიერ რიცხვს. დააბრუნეთ შესაბამისი კვირის დღე.
console.log("-----__&__-----");
console.log("დავალება მე-26:");

let dayNumber = 3;

let weekDayName = dayNumber === 1 ? "ორშაბათი" :
                  dayNumber === 2 ? "სამშაბათი" :
                  dayNumber === 3 ? "ოთხშაბათი" :
                  dayNumber === 4 ? "ხუთშაბათი" :
                  dayNumber === 5 ? "პარასკევი" :
                  dayNumber === 6 ? "შაბათი" :
                  dayNumber === 7 ? "კვირა" :
                  "არასწორი დღე";

console.log("შესაბამისი კვირის დღე: " + weekDayName);


// ==========================================
//                   // DO WHILE / WHILE
// ==========================================

//                       დავალება მე-28

// პირობა: 30-დან 2-მდე 3-ის გამოტოვებით გამოიტანეთ ყველა რიცხვი. (ორივე ლუპი გამოიყენეთ)
console.log("-----__&__-----");
console.log("დავალება მე-28 (While ვერსია):");

let whileCounter = 30;
while (whileCounter >= 2) {
    console.log("რიცხვი: " + whileCounter);
    whileCounter = whileCounter - 3;
}

console.log("დავალება მე-28 (Do While ვერსია):");
let doWhileCounter = 30;
do {
    console.log("რიცხვი: " + doWhileCounter);
    doWhileCounter = doWhileCounter - 3;
} while (doWhileCounter >= 2);


//                       დავალება მე-29

// პირობა: მომხმარებელს შემოატანინეთ ტექსტი და გაიგეთ ეს ტექსტი თუ შეიცავს ხმოვნებს.

console.log("-----__&__-----");
console.log("დავალება მე-29:");

let userText = "ვეფხისტყაოსანი"; 
let vowels = "აეიოუ";
let hasVowel = false;
let vowelIndex = 0;

while (vowelIndex < userText.length) {
    
    if (vowels.indexOf(userText[vowelIndex]) !== -1) {
        hasVowel = true;
        break;
    }
    vowelIndex++;
}
console.log("შეიცავს თუ არა ხმოვნებს?: " + hasVowel);


//                       დავალება მე-30

// პირობა: შექმენით სია და გადაუარეთ მას while && do while-ს გამოყენებით.

console.log("-----__&__-----");
console.log("დავალება მე-30 (While გადავლა):");

let loopList = ["თბილისი", "ბათუმი", "ქუთაისი"];
let indexW = 0;

while (indexW < loopList.length) {
    console.log("ქალაქი (while): " + loopList[indexW]);
    indexW++;
}

console.log("დავალება მე-30 (Do While გადავლა):");
let indexDW = 0;
do {
    console.log("ქალაქი (do-while): " + loopList[indexDW]);
    indexDW++;
} while (indexDW < loopList.length);
