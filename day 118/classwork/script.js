// ============================================================================
// //                         დავალება 1-ლი 
// ============================================================================

// პირობა: შექმენით factory function სადაც შეინახავთ მომხმარებლის სახელს, გვარს,
// მეილს, id-ს, ასაკს, და private property (_balance) სადაც საწყისაც შეინახავთ 100.
// get-მა დააბრუნოს {_balance}$ (უბრალოდ $ დაუმატოს). set-მა გაანახლოს ეს ბალანსი
// იმ შემთხვევაში თუ გადაცემული მნიშვნელობა იქნება Number ტიპის მონაცემი და დადებითი რიცხვი.

function createUser(firstName, lastName, email, id, age) {
  return {
    firstName,
    lastName,
    email,
    id,
    age,
    _balance: 100, 

    
    get balance() {
      return this._balance + "$";;
    },

    
    set balance(newValue) {
      if (typeof newValue === "number" && newValue > 0) {
        this._balance = newValue;
      } else {
        console.log("შეცდომა: ბალანსის მნიშვნელობა უნდა იყოს დადებითი რიცხვი!");
      }
    },
  };
}

