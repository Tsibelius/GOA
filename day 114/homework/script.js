// ==========================================
//               დავალება 1-ლი

// პირობა: დაწერე ფუნქცია createCar(brand, model, year), რომელიც დააბრუნებს ობიექტს.
// გამოიყენე shorthand სინტაქსი პარამეტრების მისანიჭებლად.
// ==========================================

function createCar(brand, model, year) {
  
  return {
    brand,
    model,
    year,
  };
}


const myImpala = createCar("Chevrolet", "Impala", 1967);
console.log(myImpala);



// ==========================================
//                დავალება მე-2

// პირობა: შექმენი 5 ცვლადი, სადაც განსხვავებული მონაცემები შეინახება.
// ჯერ შექმენი ობიექტი shorthand-ით, შემდეგ კი სხვა ხაზზე გამოიყენე დესტრუქცია,
// რომ ამოიღო მხოლოდ სახელის და მეილის მნიშვნელობა.
// ==========================================

const name = "გიორგი";
const email = "giorgi@email.com";
const age = 15;
const hobby = "art";
const language = "Georgian";


const userProfile = { name, email, age, hobby, language };


const { name: userName, email: userEmail } = userProfile;

console.log(userName, userEmail);



// ==========================================
//                   დავალება მე-3

// პირობა: შექმენით ფუნქცია updateProduct, რომელიც იღებს ორ არგუმენტს: id და updates
// (ობიექტი სადაც იქნება ფასი, წიგნის სახელი, ავტორი, გამოცემის წელი).
// ფუნქციამ უნდა დააბრუნოს ერთი ახალი ობიექტი სადაც იქნება id და updates-იდან
// დესტრუქციის საშუალებით ამოიღებთ მხოლოდ წიგნის სახელს.
// (მხოლოდ id, სახელს აბრუნებთ ობიექტის სახით)
// ==========================================

function updateProduct(id, updates) {
  
  const { bookName } = updates;

  
  return {
    id,
    bookName,
  };
}

