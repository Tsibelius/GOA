// =====================================================

// arrow function && function expression (ორივენაირად)

// ====================================================



//                                   დავალება 1-ლი 

// შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ რიცხვზე დაგვიბრუნებს რიცხვი ლუწია თუ კენტი

// function expression

let evenOrOdd = function(num){

    if(num % 2 === 0){
        return "ლუწია";
    } else {
        return "კენტია";
    }

}

// arrow function

let evenOrOddArrow = (num) => {

    if(num % 2 === 0){
        return "ლუწია";
    } else {
        return "კენტია";
    }

};



// =====================================================


//                                        დავალება მე-2

// შექმენით ფუნქცია რომელსაც გადაეცემა ორი რიცხვი არგუმენტად და ამ რიცხვებს შორის გაავლებს დიაპაზონს.
// შემდეგ დაგვიბრუნებს ამ რიცხვების ნამრავლს


// function expression

let rangeMultiply = function(a, b){

    let result = 1;

    for(let i = a; i <= b; i++){
        result = result * i;
    }

    return result;

}

// arrow function

let rangeMultiplyArrow = (a, b) => {

    let result = 1;

    for(let i = a; i <= b; i++){
        result = result * i;
    }

    return result;

};



// =====================================================


//                                    დავალება მე-3

// შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ რიცხვზე დაგვიბრუნებს ზუსტად ამოდის თუ არა ფესვი,
// თუ არ ამოდის მაშინ ამ რიცხვს აიყვანს კვადრატში


// function expression

let checkRoot = function(num){

    let r = Math.sqrt(num);

    if(r * r === num){
        return "ფესვი ზუსტად ამოდის";
    } else {
        return num * num;
    }

}

// arrow function

let checkRootArrow = (num) => {

    let r = Math.sqrt(num);

    if(r * r === num){
        return "ფესვი ზუსტად ამოდის";
    } else {
        return num * num;
    }

};



// =====================================================


//                                   დავალება მე-4

// შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ ორობით სისტემაში მყოფ რიცხვს გადაიყვანს ათობით სისტემაში


// function expression

let binaryToDecimal = function(binary){

    let result = 0;
    let ii = 0;

    for(let i = binary.length - 1; i >= 0; i--){

        if(binary[i] === "1"){
            result = result + (2 ** ii);
        }

        ii++;
    }

    return result;

}

// arrow function

let binaryToDecimalArrow = (binary) => {

    let result = 0;
    let ii = 0;

    for(let i = binary.length - 1; i >= 0; i--){

        if(binary[i] === "1"){
            result = result + (2 ** ii);
        }

        ii++;
    }

    return result;

};



// =====================================================


//                       დავალება მე-5

// შექმენით ფუნქცია, რომელიც არგუმენტად გადაცემულ სტრინგს დაშლის
// და ობიექტის სახით დაგვიბრუნებს რომელი სიმბოლო რამდენჯერ მეორდება


// function expression

let countLetters = function(text){

    let result = {};

    text = text.toLowerCase();

    for(let i = 0; i < text.length; i++){

        let chari = text[i];

        if(chari !== " "){

            if(result[chari]){
                result[chari] = result[chari] + 1;
            } else {
                result[chari] = 1;
            }

        }

    }

    return result;

}


// arrow function

let countLettersArrow = (text) => {

    let result = {};

    text = text.toLowerCase();

    for(let i = 0; i < text.length; i++){

        let chari = text[i];

        if(chari !== " "){

            if(result[chari]){
                result[chari] = result[chari] + 1;
            } else {
                result[chari] = 1;
            }

        }

    }

    return result;

};