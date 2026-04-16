// ==========================================
//                დავალება მე-2

// // filter()
// შექმენით სია სადაც ათწილადები და მთელი რიცხვებია.
// გამოიტანეთ მხოლოდ ისეთი რიცხვები რომლებიც არის მთელი.
// ==========================================

var ricxvebi2 = [12.5, 30, 8.1, 45, 7.7, 200, 3.14];

var mteliRicxvebi = ricxvebi2.filter(function (n) {
  // თუ 1-ზე გაყოფისას ნაშთი არის 0,შესაბამისად მთელი რიცხვია
  return n % 1 == 0;
});

console.log("დავალება 2 - მთელი რიცხვებია: " + mteliRicxvebi);

// ==========================================
//                დავალება მე-3

// filter()
// შექმენით სია სადაც იქნება სტრინგები.
// დააბრუნეთ ისეთი სტრინგები რომლებიც ხმოვნით იწყება.
// ==========================================

var sityvebi3 = ["ვაშლი", "ატამი", "მსხალი", "იასამანი", "ელემენტი", "ოთახი"];

var xmovnitIdwyeba = sityvebi3.filter(function (sityva) {
  var pirveliAso = sityva[0];
  return (
    pirveliAso == "ა" ||
    pirveliAso == "ე" ||
    pirveliAso == "ი" ||
    pirveliAso == "ო" ||
    pirveliAso == "უ"
  );
});

console.log("დავალება 3 - ხმოვნით იწყება: " + xmovnitIdwyeba.join(", "));

// ==========================================
//                დავალება მე-4

//  filter()
// შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები.
// დააბრუნეთ მხოლოდ კენტი რიცხვები.
// ==========================================

var monacemebi4 = ["მარიამი", 13, false, 24, 7, "პროგრამირება", 10, 3];

var kentiRicxvebi = monacemebi4.filter(function (elementi) {
  // ჯერ ვამოწმებთ არის თუ არა ნამდვილად რიცხვი და მერე არის თუ არა კენტი
  return typeof elementi == "number" && elementi % 2 != 0;
});

console.log("დავალება 4 - კენტი რიცხვებია: " + kentiRicxvebi);

// ==========================================
//                დავალება მე-5

// map() + filter()
// შექმენით სია მინიმუმ 5 რიცხვით. აიყვანეთ კვადრატში და
// წამოიღეთ მხოლოდ ისეთი რიცხვები რომლებიც არის ორნიშნა.
// ==========================================

var ricsvebi5 = [3, 5, 9, 12, 2, 15];


var kvadratshiAsuli = ricsvebi5.map(function (n) {
  return n * n;
});


var mxolodOrnishna = kvadratshiAsuli.filter(function (n) {
  return n >= 10 && n <= 99;
});

console.log("დავალება 5 - ორნიშნა კვადრატებია: " + mxolodOrnishna);

// ==========================================
//                დავალება მე-6

// findIndex()
// შექმენით მინიმუმ 20 სიმბოლოიანი სტრინგი სფეისებით.
// გადააქციეთ სიად და დააბრუნეთ პირველივე ხმოვნის ინდექსი.
// ==========================================

var didiTeksti = "dges kargi amindia da vscavlobt javascript-s";
var asoebisSia = didiTeksti.split(""); 
var pirveliXmovnisIndeqsi = asoebisSia.findIndex(function (aso) {

  
  return aso == "a" || aso == "e" || aso == "i" || aso == "o" || aso == "u";
});

console.log(
  "დავალება 6 - პირველი ხმოვანი არის ინდექსზე: " + pirveliXmovnisIndeqsi,
);

