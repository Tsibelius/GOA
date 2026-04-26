// ==========================================
//                დავალება 1-ლი
// პირობა: შექმენი user ობიექტი: _password, username
// მოთხოვნები: შექმენი getter password → ყოველთვის აბრუნებს "****"
// შექმენი მეთოდი changePassword(oldPass, newPass)
// წესები: თუ oldPass არ ემთხვევა → არ შეცვალოს, newPass უნდა იყოს მინიმუმ 6 სიმბოლო
// ==========================================

var user = {
  username: "Tsibelius",
  _password: "ma miorc xawapuri",

  get password() {
    return "****************";
  },

  changePassword: function (oldPass, newPass) {
    if (oldPass !== this._password) {
      
      return;
    }
    if (newPass.length >= 6) {
      
      this._password = newPass;
    }
  },
};

// ==========================================
//                დავალება მე-2
// პირობა: შექმენი bankAccount: _balance
// მეთოდები: deposit(amount), withdraw(amount)
// წესები: amount > 0 ანუ შესატანი თანხა(0 ლარს ვერ შევიტანთ)
// withdraw არ უნდა აღემატებოდეს ბალანსს(თუ ბალანსზე 100 ლარი გვაქ 200 ვერ გამოვიტანთ D)
// შექმენი getter: რომელიც აბრუნებს balance ს
// ==========================================

var bankAccount = {
  _balance: 100,

  deposit: function (amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  },

  withdraw: function (amount) {
    if (amount <= this._balance && amount > 0) {
      this._balance -= amount;
    }
  },

  get balance() {
    return this._balance;
  },
};

// ==========================================
//                დავალება მე-3
// პირობა: შექმენი ობიექტი სადაც არის _items → მასივი ობიექტების:
// { name: "apple", price: 5, qty: 2 } ... სხვა ობიექტების სხვადასვხ მნშვნელობებით
// მეთოდები: addItem(product), removeItem(index), clear()
// getter: დააბრუნოს ყველა პროდუქტის ფასი --> totalPrice
// ==========================================

var cart = {
  _items: [
    { name: "apple", price: 5, qty: 2 },
    { name: "orange", price: 3, qty: 4 },
  ],

  addItem: function (product) {
    this._items.push(product);
  },

  removeItem: function (index) {
    this._items.splice(index, 1);
  },

  clear: function () {
    this._items = [];
  },

  get totalPrice() {
    return this._items.reduce(function (sum, item) {
      return sum + item.price * item.qty;
    }, 0);
  },
};

// ==========================================
//                დავალება მე-4
// პირობა: შექმენი user: სადაც იქნება : _email
// setter: უნდა შეცვალოს ემაილი(_email)
// წესები: ახალი ემაილი უნდა შეიცავდეს "@" და "." ერთად
// getter: აბრუნებს _email ს
// ==========================================

var userContact = {
  _email: "Tsibelius@gmail.com",

  set email(newEmail) {
    
    if (newEmail.includes("@") && newEmail.includes(".")) {
      this._email = newEmail;
    }
  },

  get email() {
    return this._email;
  },
};
