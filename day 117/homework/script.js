// ============================================================================
// // reduce
// ============================================================================

// 2. პირობა: შექმენით სია სადაც იქნება შენახული 5 ობიექტი პროდუქტების შესახებ. 
// თქვენი დავალებაა რომ ამ პროდუქტების ფასები შეკრიბოთ

const products = [
  { name: "Laptop", price: 1500 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 120 },
  { name: "Monitor", price: 450 },
  { name: "Headphones", price: 180 }
];

const totalProductPrice = products.reduce((sum, product) => sum + product.price, 0);


// 3. პირობა: შექმენი სია სადაც იქნება ჩამოწერილი სახელები (ზოგი განმეორდება). 
// თქვენი დავალებაა რომ დააბრუნოთ ობიექტის სახით თითოეული სახელი რამდენჯერ მეორდება 
// (key იქნება თვითონ სახელი და value რაოდენობა)

const namesList = ["Ana", "Giorgi", "Ana", "Luka", "Giorgi", "Ana"];

const nameCounts = namesList.reduce((acc, currentName) => {
  if (acc[currentName]) {

    acc[currentName] += 1;
  } else {
    acc[currentName] = 1;
  }
  return acc;
}, {});


// 4. პირობა: შექმენით სია სადაც იქნება რიცხვები. თუ რიცხვი ლუწია მაშინ 
// ჯამი გაამრავლეთ ამ რიცხვზე, თუ კენტია უბრალოდ მიუმატეთ და დააბრუნეთ შედეგი

const numbersArray = [1, 2, 3, 4];

const reduceMathResult = numbersArray.reduce((accumulator, currentNum) => {
  
  if (currentNum % 2 === 0) {
    return accumulator * currentNum;
  } else {
    return accumulator + currentNum;
  }
});


// ============================================================================
// // get / set
// ============================================================================

// 5. პირობა: შექმენით ობიექტი სადაც გექნებათ private property და ეს იქნება ბალანსი. 
// რომლის მნიშვნელობაც იქნება თავიდან 100-ის ტოლი. get-მა დააბრუნოს ბალანსის 80%. 
// set-ში კი დაწერეთ პირობა სადაც შეამოწმებთ რომ ბალანსზე მომხმარებელმა აუცილებლად 
// 50-ზე მეტი მთელი რიცხვი უნდა შემოიტანოს.

var account = {
  _balance: 100,
  
  get balance() {
    return this._balance * 0.8;
  },
  
  set balance(newValue) {
    if (newValue > 50 && Number.isInteger(newValue)) {
      this._balance = newValue;
    } else {
      console.log("ბალანსზე უნდა შემოიტანოთ 50 ლარზე მეტი თანხა (ხურდები არა) ");
    }
  }
};


// 6. პირობა: შექმენით ობიექტი სადაც გექნებათ private property და ეს იქნება სიჩქარე. 
// რომლის მნიშვნელობაც იქნება თავიდან 10-ის ტოლი. თუ სიჩქარე 100-ზე მეტია, 
// get-მა დააბრუნოს ტექსტი "Super Speed: [სიჩქარე]", სხვა შემთხვევაში უბრალოდ სიჩქარის რიცხვი. 
// set-ში კი დაწერეთ პირობა, სადაც შეამოწმებთ, რომ ახალი შემოყვანილი სიჩქარე 
// აუცილებლად არსებულ სიჩქარეზე მეტი იქნება.

  var car = {
  _speed: 10,
  
  get speed() {
    if (this._speed > 100) {
      
      return "Super Speed: " + this._speed;
    }
    return this._speed;
  },
  
  set speed(newSpeed) {
    if (newSpeed > this._speed) {
      this._speed = newSpeed;
    } else {
      console.log("ახალი სიჩქარე უნდა აღემატებოდეს არსებულ სიჩქარეს ");
    }
  }
};


// ============================================================================
// // find
// ============================================================================

// 7. პირობა: შექმენით სია სადაც გექნებათ იუზერების ობიექტები (id, name, age). 
// find()-ის გამოყენებით იპოვეთ ის მომხმარებელი, რომლის id იქნება 3-ის ტოლი და დააბრუნეთ ეს ობიექტი.

const users = [
  { id: 1, name: "Luka", age: 20 },
  { id: 2, name: "Mariam", age: 22 },
  { id: 3, name: "Giorgi", age: 15 },
  { id: 4, name: "napoleoni", age: 25 }
];

const userWithId3 = users.find(user => user.id === 3);


// 8. პირობა: შექმენით სია სადაც იქნება ათწილადები და მთელი რიცხვები. 
// დააბრუნეთ პირველი ათწილადი რიცხვი.

const mixedNumbers = [5, 12, 4.5, 9, 3.14, 8];

var first = mixedNumbers.find(num => num % 1 !== 0);


// ============================================================================
// // findIndex()
// ============================================================================

// 9. პირობა: შექმენით სია სადაც გექნებათ რიცხვები და სტრინგები. 
// იპოვეთ პირველივე სტრინგ ტიპის ელემენტის ინდექსი და სიიდან ამოშალეთ.

const mixedArray = [10, 25, "Hello", 40, "World"];

var firstStringIndex = mixedArray.findIndex(element => typeof element === "string");

if (firstStringIndex !== -1) {
  mixedArray.splice(firstStringIndex, 1);
}


// 10. პირობა: შექმენით სია სადაც გექნებათ სტრინგები. 
// დააბრუნეთ ისეთი ელემენტის ინდექსი რომლის სიგრძეც მეტია 7-ზე
 
const wordsArray = ["Apple", "Car", "vefxistyaosani", "JavaScript", "Goa"];

const longWordIndex = wordsArray.findIndex(word => word.length > 7);


// ============================================================================
// // Factory Functions
// ============================================================================

// 11. პირობა: შექმენით Factory ფუნქცია createBook(title, author, price), 
// რომელიც დააბრუნებს ობიექტს ამ თვისებებით. ობიექტს შიგნითვე უნდა ჰქონდეს მეთოდი getInfo(), 
// რომელიც კონსოლში დაბეჭდავს ტექსტს: "წიგნი: [title], ავტორი: [author], ფასი: [price] ლარი".
function createBook(title, author, price) {
  return {
    title,
    author,
    price,
    getInfo() {
      
      console.log("წიგნი: " + this.title + ", ავტორი: " + this.author + ", ფასი: " + this.price + " ლარი");
    }
  };
}


// 12. პირობა: შექმენით Factory ფუნქცია createRobot(name), სადაც იქნება _battery და 
// თავიდან იქნება 100-ის ტოლი. ფუნქციამ უნდა დააბრუნოს ობიექტი, რომელსაც ექნება 
// get battery (დააბრუნებს: "Battery: [battery]%") და მეთოდი work(). 
// work() მეთოდის ყოველ გამოძახებაზე ბატარეას უნდა დააკლდეს 15%. 
// თუ ბატარეა 15-ზე ნაკლებია, მეთოდმა უნდა დაბეჭდოს "დაიტენე!"

function createRobot(name) {
  return {
    name,
    _battery: 100,
    
    get battery() {
      
      return "Battery: " + this._battery + "%";
    },
    
    work() {
      if (this._battery < 15) {
        console.log("დაიტენე ბიძია გეხუტუნოს!");
      } else {
        this._battery -= 15;
      }
    }
  };
}


// ============================================================================
// // Property Value Shorthand
// ============================================================================

// 13. პირობა: შექმენით ფუნქცია registerUser(username, email, password). 
// ფუნქციამ Property Value Shorthand-ის გამოყენებით უნდა დააბრუნოს ობიექტი, 
// სადაც ეს სამივე პარამეტრი თვისებებად იქნება ჩაწერილი.

function registerUser(username, email, password) {
  return {
    username,
    email,
    password
  };
}


// 14. პირობა: შექმენით ფუნქცია createProduct(title, price). 
// ფუნქციის შიგნით შექმენით ახალი ცვლადი discountPrice, რომელიც იქნება ფასის ნახევარი. 
// ფუნქციამ Shorthand სინტაქსით უნდა დააბრუნოს ობიექტი, რომელშიც იქნება სამივე თვისება: 
// title, price და discountPrice

function createProduct(title, price) {
  const discountPrice = price / 2;
  
  return {
    title,
    price,
    discountPrice
  };
}


// ============================================================================
// // Destructured Assignment
// ============================================================================

// 15. პირობა: მოცემულია მასივი const colors = ["წითელი", "მწვანე", "ლურჯი", "ყვითელი"];. 
// დესტრუქტურიზაციის გამოყენებით ამოიღეთ პირველი ორი ფერი ცვლადებში first და second.

const colors = [" მეწამული სისხლისფერი", "მწვანე", "ლურჯი", "ყვითელი"];

const [first, second] = colors;


// 16. პირობა: მოცემულია ობიექტი const user = { id: 10, username: "Ana" };. 
// დესტრუქტურიზაციის გამოყენებით ამოიღეთ ეს თვისებები ისე, რომ id ჩაწეროთ 
// ცვლადში სახელად userId, ხოლო username ცვლადში სახელად name.

const user = { id: 10, username: "Ana" };

const { id: userId, username: name } = user;