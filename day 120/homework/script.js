// ==========================================
// დავალება 1-ლი: querySelector და querySelectorAll

// ==========================================

/*  რა არის querySelector და querySelectorAll?

   ეს მეთოდები არის ელემენტების მოძებნის ყველაზე თანამედროვე და მოქნილი გზა.
   ისინი იყენებენ CSS სელექტორების სინტაქსს (წერტილი კლასისთვის, დიზი ID-ისთვის და ა.შ.).

   1. document.querySelector("სელექტორი")
      - აბრუნებს მხოლოდ პირველივე ელემენტს, რომელიც ემთხვევა CSS სელექტორს.
      

   2. document.querySelectorAll("სელექტორი")
      - აბრუნებს ყველა ელემენტს, რომელიც აკმაყოფილებს პირობას.
      


*/

// ==========================================
// დავალება მე-2: getAttribute და setAttribute
// ==========================================

/*  განსხვავება მეთოდებს შორის:
   - getAttribute("ატრიბუტი") გვიბრუნებს HTML თეგში უკვე არსებული ატრიბუტის მნიშვნელობას (მაგ. src, class, href).
   - setAttribute("ატრიბუტი", "მნიშვნელობა") კი თავად უცვლის ან უმატებს ახალ ატრიბუტს ელემენტს.

    სინტაქსი და მაგალითი:
   var link = document.querySelector("a");
   var currentHref = link.getAttribute("href"); // წავიკითხეთ რა ლინკია
   link.setAttribute("href", "https://google.com"); // შევცვალეთ ახალი ლინკით
*/


// ==========================================
// დავალება მე-4: innerText, innerHTML და textContent
// ==========================================

/* 
   
   წარმოიდგინე გვაქვს თეგი: <div id="test"> <span>ტექსტი</span> <span style="display:none">მალული</span> </div>

   1. innerHTML - აღიქვამს HTML თეგებს. 
      მაგალითად: element.innerHTML = "<b>მუქი</b>"; -> ეკრანზე გამოჩნდება მუქი ტექსტი.
   
   2. textContent - ამოაქვს აბსოლუტურად ყველა ტექსტი, მათ შორის ისიც, რაც CSS-ით დამალულია (display: none).
      მაგალითად: element.textContent -> გამოიტანს "ტექსტი მალული".
   
   3. innerText - ამოაქვს მხოლოდ ის ტექსტი, რასაც მომხმარებელი რეალურად ხედავს ეკრანზე (დამალულს გამოტოვებს).
      მაგალითად: element.innerText -> გამოიტანს მხოლოდ "ტექსტი"-ს.
*/

// ==========================================
// დავალება მე-5: დივის გასტილვა სახელით (set/getAttribute)
// ==========================================

var myName = "გიორგი"; 
var task5Div = document.getElementById("task5-div");

if (myName === "გიორგი") {
  
  task5Div.setAttribute("class", "success-style");
  task5Div.innerHTML = "<h1>გიორგი</h1>";
} else {
 
  task5Div.setAttribute("class", "danger-style");
  task5Div.innerHTML = "გამარჯობა";
}


console.log("დივის მიმდინარე კლასია: " + task5Div.getAttribute("class"));

// ==========================================
// დავალება მე-6: პაროლის შემოწმება (prompt)
// ==========================================
var correctPassword = "1234";
var userPassword = prompt("გთხოვთ, შემოიყვანოთ პაროლი:");
var authResult = document.getElementById("auth-result");

if (userPassword === correctPassword) {
  authResult.innerHTML = "<h2>პაროლი სწორია</h2>";
} else {
  authResult.innerHTML = "<h2>პაროლი არასწორია</h2>";
}
