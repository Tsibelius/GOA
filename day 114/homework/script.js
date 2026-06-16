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


const myImpala = createCar("Chevrolet", "Impala", 1967 );
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
//                 მე-3 დავალება

//
// შექმენით ფუნქცია updateProduct, რომელიც იღებს ორ არგუმენტს: id და updates 
// (ობიექტი სადაც იქნება ფასი, წიგნის სახელი, ავტორი, გამოცემის წელი). 
// ფუნქციამ უნდა დააბრუნოს ერთი ახალი ობიექტი სადაც იქნება id და updates-იდან 
// დესტრუქციის საშუალებით ამოიღებთ მხოლოდ წიგნის სახელს. 
// (მხოლოდ id, სახელს აბრუნებთ ობიექტის სახით)
// ===================~======================

function updateProduct(id, updates) {
  // updates ობიექტიდან დესტრუქციით ამოგვაქვს მხოლოდ წიგნის სახელი (bookName)
  const { bookName } = updates;
  
  // ვაბრუნებთ ახალ ობიექტს მხოლოდ id-ით და წიგნის სახელით
  return {
    id: id,
    bookName: bookName
  };
}

  

const motorcycle = {
  brand: "Kawasaki",
  model: "Ninja H2R",
  specs: {
    engine: "998cc",
    horsepower: 310,
    topSpeed: "400 km/h"
  },
  colors: ["Lime Green", "Mirror Coated Spark Black"],
  isStreetLegal: false
};

// მოახდინეთ ამ ობიექტის დესტრუქცია მაქსიმალურად:
const {
  brand,
  model,
  specs: { engine, horsepower, topSpeed }, // ჩადგმული ობიექტის დესტრუქცია
  colors: [firstColor, secondColor],       // მასივის ელემენტების დესტრუქცია
  isStreetLegal
} = motorcycle;


// ==========================================
// შემოწმება (შეგიძლია კონსოლში გაუშვა ტესტისთვის):
// ==========================================
/*
const testUpdates = {
  price: 25,
  bookName: "ვეფხისტყაოსანი",
  author: "შოთა რუსთაველი",
  year: 1200
};

console.log(updateProduct(101, testUpdates)); 
// დააბრუნებს: { id: 101, bookName: 'ვეფხისტყაოსანი' }

console.log(brand, model, engine, horsepower, topSpeed, firstColor, secondColor, isStreetLegal);
*/