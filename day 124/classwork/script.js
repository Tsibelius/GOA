let result = document.getElementById("result");

function handleKeyDown(event) {
  if (event.key === "Enter") {
    result.textContent = "Enter დააჭირე!";
  } else if (event.key === " " || event.key === "Spacebar") {
    result.textContent = "Space დააჭირე!";
  } else {
    result.textContent = "დაჭერილია: " + event.key;
  }
}

function handleKeyUp(event) {
  if (event.key === "Enter") {
    result.textContent = "Enter გათავისუფლდა!";
  } else if (event.key === " " || event.key === "Spacebar") {
    result.textContent = "Space გათავისუფლდა!";
  } else {
    result.textContent = "ღილაკს ხელი აუშვი: " + event.key;
  }
}
