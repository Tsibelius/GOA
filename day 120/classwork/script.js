window.onload = function () {
  var myDiv = document.createElement("div");
  myDiv.textContent = "ტექსტი";

  var currentSize = 100;

  myDiv.onmousedown = function () {
    myDiv.style.backgroundColor = "red";
    myDiv.textContent = "Pressed";
  };
  

  myDiv.onmouseup = function () {
    myDiv.style.backgroundColor = "green";
    myDiv.textContent = "Released";
  };

  myDiv.onwheel = function () {
    currentSize += 10;
    myDiv.style.width = currentSize + "px";
    myDiv.style.height = currentSize + "px";
  };


  document.body.appendChild(myDiv);
};
