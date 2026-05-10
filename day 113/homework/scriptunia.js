// ==========================================
//                დავალება 1-ლი

// პირობა: გაქვს ობიექტი user. მოთხოვნები: _age იყოს private property.
// setter არ უნდა აძლევდეს უარყოფით მნიშვნელობას(შეამოწმე თუ უატყოფითა არ შეცვალო თუ დადებითია შეცვალე ახალი მნშვნელპბით).
// getter აბრუნებდეს ასაკს. თუ არასწორი მნიშვნელობაა  console.log("არასწორი ასაკი")
// ==========================================

var user = {
  _age: 15, 
  set age(value) {
    if (value >= 0) {
      this._age = value;
    } else {
      console.log("არასწორი ასაკია");
    }
  },

  get age() {
    return this._age;
  },
};


// ==========================================
//                დავალება მე-2

// პირობა: გაქვს weather(მოიძიე როგორი აგადავიყვანოთ F to C ). მოთხოვნები: _celsius private.
// setter ცელსიუსზე. getter fahrenheit დააბრუნოს გადაყვანილი მნიშვნელობა.
// ==========================================

var weather = {
  _celsius: 20,

  set celsius(value) {
    this._celsius = value;
  },

  get fahrenheit() {
    return this._celsius * 1.8 + 32;
  },
};

// ==========================================
//                დავალება მე-3

// პირობა: გაქვს profile. მოთხოვნები: _username private.
// setter: ყველა ასო უნდა იყოს პატარა (lowercase). getter: აბრუნებს "@" + username
// ==========================================

var profile1 = {
  _username: "",

  set username(value) {
    this._username = value.toLowerCase();
  },

  get username() {
    return "@" + this._username;
  },
};

// ==========================================
//                დავალება მე-4

// პირობა: გაქვს profile. property: _username. გააკეთე: setter username(value).
// არ უნდა შეიცავდეს space-ს. უნდა იყოს მინიმუმ 3 ციფრი ამ სტრინგში. შეინახე lowercase-ში.
// getter username() დააბრუნე "@" + username. getter length() აბრუნებს username-ის სიგრძეს.
// ==========================================

var profile2 = {
  _username: "",

  set username(value) {
    var hasSpace = value.includes(" ");
    var digitCount = value.replace(/[^0-9]/g, "").length;

    if (!hasSpace && digitCount >= 3) {
      this._username = value.toLowerCase();
    }
  },

  get username() {
    return "@" + this._username;
  },

  get length() {
    return this._username.length;
  },
};

// ==========================================
//                დავალება მე-5

// პირობა: გაქვს textAnalyzer. property: _text. გააკეთე: setter text(value).
// უნდა იყოს string. trim გააკეთე (საწყისი/ბოლო space წაიშალოს)(მოიძიეთ trim()).
// getter length() ტექსტის სიგრძე. getter wordCount() რამდენი სიტყვაა. getter isLong() true თუ 20+ სიმბოლოა.
// ==========================================

var textAnalyzer = {
  _text: "",

  set text(value) {
    if (typeof value === "string") {
      this._text = value.trim();
    }
  },

  get length() {
    return this._text.length;
  },

  get wordCount() {
    return this._text.split(/\s+/).filter(Boolean).length;
  },

  get isLong() {
    return this._text.length > 20;
  },
};

// ==========================================
//                დავალება მე-6

// პირობა: დაწერე ფუნქცია createCar(brand, year). დააბრუნოს ობიექტი: brand, year.
// შექმენი რამდენიმე ობიექტი თან შეიანხე ცვლადებში და დააკონსოლლოგე.
// ==========================================

function createCar(brand, year) {
  return {
    brand: brand,
    year: year,
  };
}

var car1 = createCar("Toyota", 2020);
var car2 = createCar("BMW", 2022);
console.log(car1);
console.log(car2);

// ==========================================
//                დავალება მე-7

// პირობა: შექმენი ფუნქცია ავტომობილზე,ქონდეს model,brand,year,color და მოიფიქრე სხვა მნიშვნელობები შენითაც თუ შეძლებ.
// შექმენი factory function რომელიც შექმნის მანქანის ობიექტებს,შექმენი რამდენიმე ობიექტი და ნახე კონსოლში ყველა მათგანი.
// ==========================================

function carFactory(model, brand, year, color, nickname, owner) {
  return {
    model: model,
    brand: brand,
    year: year,
    color: color,
    nickname: nickname, 
    owner: owner, 
    trunkContent: "Salt, Iron, Silver bullets", 
  };
}


var impala = carFactory(
  "Impala",
  "Chevrolet",
  1967,
  "Black",
  "Baby",
  "Dean Winchester",
);
var otherCar = carFactory("Mustang", "Ford", 1969, "Blue", "Stallion", "John");

console.log(impala);
console.log(otherCar);

// ==========================================
//                დავალება მე-8

// პირობა: შექმენი ფუნციადა გადაეცი ორია რგუმენტი a და b, ასევე დაამატე მეთოდები add() minus()
// რომელიც შეკრებსამ რიცხვებს და მეორე მეთოდი გამოაკლებს, შექმენი ობიექტებიდ ა შეინახე ცვლადებში,
// ამ ცვლადებზე(ანუ ობიექტებზე) გამოიძახეთ მეთოდები.
// ==========================================

function createCalculator(a, b) {
  return {
    a: a,
    b: b,
    add: function () {
      return this.a + this.b;
    },
    minus: function () {
      return this.a - this.b;
    },
  };
}

var myCalc1 = createCalculator(15, 10);
var myCalc2 = createCalculator(50, 20);

console.log("შეკრება:", myCalc1.add());
console.log("გამოკლება:", myCalc1.minus());
