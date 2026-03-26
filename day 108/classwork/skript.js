// =====================================================
//             დავალება 1-ლი
// =====================================================
// შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი სადაც იქნება
// როგორც ასოები, ასევე რიცხვები და სხვა დანარჩენი სიმბოლო.
// ობიექტის სახით დააბრუნეთ ასოები, რიცხვები და სხვა სიმბოლოები რამდენჯერ მეორდება.

let countSymbols = function (text) {
  let result = {
    letters: 0,
    numbers: 0,
    others: 0,
  };

  for (let i = 0; i < text.length; i++) {
    let chari = text[i];

    if ((chari >= "a" && chari <= "z") || (chari >= "A" && chari <= "Z")) {
      result.letters = result.letters + 1;
    } else if (chari >= "0" && chari <= "9") {
      result.numbers = result.numbers + 1;
    } else {
      result.others = result.others + 1;
    }
  }

  return result;
};

console.log("დავალება 1-ლი :");
console.log(countSymbols("Goa123!@#"));

//             დავალება მე-2

// შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად ტექსტი, სადაც იქნება რიცხვები, ასოები და სხვა სიმბოლოები.
// თქვენი მიზანია დაითვალოთ თითოეული მათგანი რამდენჯერ გვხვდება და შემდეგ გადაამრავლოთ ერთმანეთზე.
// (თუ რომელიმე ერთ-ერთის მნიშვნელობა 0 იქნება მაშინ ამ რიცხვზე არ გადაამრავლოთ)

function countAndMultiply(text) {
  let khachapuri = 0;
  let khinkali = 0;
  let lobiani = 0;

  for (let i = 0; i < text.length; i++) {
    let symbol = text[i];

    if ((symbol >= "a" && symbol <= "z") || (symbol >= "A" && symbol <= "Z")) {
      khachapuri = khachapuri + 1;
    } else if (symbol >= "0" && symbol <= "9") {
      khinkali = khinkali + 1;
    } else {
      lobiani = lobiani + 1;
    }
  }

  let result = 1;

  if (khachapuri > 0) {
    result = result * khachapuri;
  }

  if (khinkali > 0) {
    result = result * khinkali;
  }

  if (lobiani > 0) {
    result = result * lobiani;
  }

  return result;
}

console.log("დავალება მე-2 :");
console.log(countAndMultiply("Goa123!@"));
