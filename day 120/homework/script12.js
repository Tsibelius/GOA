
var mainContainer = document.getElementById("main-container");


var newParagraph = document.createElement("p");


newParagraph.textContent = "child1";


newParagraph.setAttribute("class", "child1");


mainContainer.appendChild(newParagraph);

// ===================================================


var newHeading = document.createElement("h2");


newHeading.textContent = "child2";


newHeading.setAttribute("class", "child2");


mainContainer.appendChild(newHeading);
