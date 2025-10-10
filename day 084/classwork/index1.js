let myName = "Giorgi";

let userName = prompt("Enter your name:");
let userAge = Number(prompt("Enter your age:")); 

if (userName === myName && userAge > 18) {
  console.log("we have same name and you are more than 18 yo");
} else if (userName !== myName && userAge > 18) {
  console.log("We do not have same names but you are more than 18 yo");
} else {
  console.log("dzia ra arseba xar ");
  console.log("dedamiweli xar saertod?")
}
