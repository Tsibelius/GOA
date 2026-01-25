//            დავალება 1-ლი

var person = {
  name: "გიორგი",
  surname: "წიბლიაშვილი",
  age: 15,
};

console.log(" დავალება 1-ლი : ");
console.log("ადამიანის სახელი :" + " " + person.name);
console.log("ადამიანის გვარი :" + " " + person.surname);
console.log("ადამიანის წლოვანება :" + " " + person.age);

//           დავალება მე-2

const car = {
  brand: "Chevrolet",
  like: true,
  year: 1967,
};

car.year = 1970;

car.model = "Impala";

delete car.like;

console.log(" დავალება მე-2 : ");

console.log("მანქანის ბრენდი :" + " " + car.brand);
console.log(" მანქანის გამოშვების წელი :" + " " + car.year);
console.log("მანქანის მოდელი ;" + " " + car.model);
