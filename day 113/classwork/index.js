//                                  დავალება 1-ლი

// შექმენი ობიექტი სადაც იქნება _number  , სადაც შეინახავ სტრინგ ტელეფონის ნომერს
//
// შენი დავალებაა შექმნა set tel ,რომელმაც უნდა შეცვალოს ტელეფონის ნომერი შემდგნაირად-->
//
// უნდა იყოს 6 ზე მეტი სიმბოლო და ეს სტრინგი უნდა შეიცავდეს მხოლოდ ციფრებს
//
// თუ პირობა დაკმაყოფილდა შეცვალე ნომერი თუ არა და გამოიტანე ALERT!!
//
//
// შემდეგ შექმენი GET რომელიც დააბრუნებს შეცვლილ მნშვნელობას შემდეგნაირად -->
//
// თუ სიგრძე არის 6 ზე მეტი დააბრუნე ნომერი,სხვა შემთხვევაშ დააბრუნე CANT RETURN NUMBER


var phoneObject = {
  _number: "555112233",

  set tel(newNumber) {
    if (newNumber.length > 6 && +newNumber) {
      this._number = newNumber;
    } else {
      console.log("ALERT!!");
    }
  },

  get tel() {
    if (this._number.length > 6) {
      return this._number;
    } else {
      return "CANT RETURN NUMBER";
    }
  },
};


phoneObject.tel = "599123456"; // წარმატებით შეიცვლება
console.log(phoneObject.tel);  // გამოიტანს ახალ ნომერს
phoneObject.tel = "123";       // გამოიტანს ALERT!! -ს
