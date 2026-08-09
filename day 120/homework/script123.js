
var c = true;


var firstParagraph = document.getElementById("first-p");
var secondParagraph = document.getElementById("second-p");


if (c) {
  
  secondParagraph.remove();
  console.log("ცვლადი იყო true, ამიტომ წაიშალა მეორე პარაგრაფი (false).");
} else {
  
  firstParagraph.remove();
  console.log("ცვლადი იყო false, ამიტომ წაიშალა პირველი პარაგრაფი (true).");
}
