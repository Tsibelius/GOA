//                დავალება 1-ლი

// პირობა: მოცემული სიიდან reduce-ის გამოყენებით იპოვე
// ყველაზე ძვირიანი პროდუქტი და დააბრუნე მთლიანი ობიექტი.

// ==========================================

console.log("დავალება 1-ლი :");

var produqtebi = [
  { name: "apple", price: 2 },
  { name: "banana", price: 5 },
  { name: "orange", price: 3 },
];

var yvelazeDzviriani = produqtebi.reduce(function (a, mimdinare) {
  if (mimdinare.price > a.price) {
    return mimdinare;
  } else {
    return a;
  }
});

console.log("ყველაზე ძვირიანი პროდუქტია : ", yvelazeDzviriani);
