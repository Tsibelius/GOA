window.onload = function () {
  var card = document.createElement("div");
  card.className = "product-card";

  var img = document.createElement("img");
  img.setAttribute("src", "https://picsum.photos/200/150");
  img.setAttribute("alt", "პროდუქტის ფოტო");

  var title = document.createElement("h3");
  title.textContent = "დასვენება ამ მშვენიერ ადგილას";

  var price = document.createElement("p");
  price.className = "price";
  price.textContent = "150 ₾";

  var buyBtn = document.createElement("button");
  buyBtn.className = "buy-btn";
  buyBtn.textContent = "Buy Now";

  card.append(img, title, price, buyBtn);
  document.body.appendChild(card);

  card.onmouseover = function () {
    price.style.display = "block"; // გამოჩნდეს ფასი
    buyBtn.style.display = "block"; // გამოჩნდეს
    card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
  };

  card.onmouseout = function () {
    price.style.display = "none";
    buyBtn.style.display = "none";
    card.style.boxShadow = "none";
  };
};
