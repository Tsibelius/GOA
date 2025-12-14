//                                               დავალება 1-ლი

// შექმენით ფუნქცია, რომელიც დაგვიბრუნებს შემოტანილი მნიშვნელობა ლუწია თუ კენტი

function evenOrOdd(n) {
    if (n % 2 === 0) {
        return "თქვენს მიერ შეყვანილი რიცხვი ლუწია";
    } else {
        return "თქვენს მიერ შეყვანილი რიცხვი კენტია";
    }
}

console.log("დავალება 1-ლი :")
console.log(evenOrOdd(10));  



//                                               დავალება მე-2

// შექმენით ფუნქცია, რომელიც მომხმარებლის შემოტანილი რიცხვის კვადრატს დაგვიბრუნებს.

function square(n) {
    return n * n;
}

console.log("დავალება მე-2 :")
console.log(square(5));
console.log(square(12));
console.log(square(3));