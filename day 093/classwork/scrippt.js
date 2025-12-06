//                                               დავალება 1-ლი 

// მოცემული გაქვთ სია [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900]
// გამოიტანეთ ამ სიიდან ყველაზე დიდი რიცხვი.


let numbers = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900];

let max = numbers[0]; 

let i = 1;
while (i < numbers.length) {
    
    
    if (numbers[i] > max) {
        max = numbers[i];
    }

    i = i + 1; 
}

console.log(max);