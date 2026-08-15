let x = 50;
let y = 50;
let step = 10;
  
//   დავალება 1-ლი

function handleKeyDown(event) {
  let charac = document.getElementById("character");

  // პერსონაჟის მოძრაობა
  if (event.key === "ArrowRight") {
    x += step;
    charac.style.left = x + "px";
    charac.style.transform = "rotate(90deg)";
  } else if (event.key === "ArrowDown") {
    y += step;
    charac.style.top = y + "px";
    charac.style.transform = "rotate(180deg)";
  } else if (event.key === "ArrowLeft") {
    x -= step;
    charac.style.left = x + "px";
    charac.style.transform = "rotate(270deg)";
  } else if (event.key === "ArrowUp") {
    y -= step;
    charac.style.top = y + "px";
    charac.style.transform = "rotate(0deg)";
  }

  
//   დავალება მე-2

// A S D F G ღილაკების აქტივაცია

  if (event.key === "a" || event.key === "A") {
    document.getElementById("keyA").classList.add("key-active");
  }
  if (event.key === "s" || event.key === "S") {
    document.getElementById("keyS").classList.add("key-active");
  }
  if (event.key === "d" || event.key === "D") {
    document.getElementById("keyD").classList.add("key-active");
  }
  if (event.key === "f" || event.key === "F") {
    document.getElementById("keyF").classList.add("key-active");
  }
  if (event.key === "g" || event.key === "G") {
    document.getElementById("keyG").classList.add("key-active");
  }

  // Space ღილაკის ლოგიკა
  let spaceBtn = document.getElementById("spaceButton");
  if (event.code === "Space") {
    spaceBtn.textContent = "Pressed!";
  } else {
    spaceBtn.textContent = "Wrong key!";
  }

  // ფერადი წრეები (R, Y, G)
  
  if (event.key === "r" || event.key === "R") {
    document.getElementById("redCircle").classList.add("red-active");
  }
  if (event.key === "y" || event.key === "Y") {
    document.getElementById("yellowCircle").classList.add("yellow-active");
  }
  if (event.key === "g" || event.key === "G") {
    document.getElementById("greenCircle").classList.add("green-active");
  }
}

// 2) მისია (KeyUp)
function handleKeyUp(event) {
  // A S D F G აშვება

  if (event.key === "a" || event.key === "A") {
    document.getElementById("keyA").classList.remove("key-active");
  }
  if (event.key === "s" || event.key === "S") {
    document.getElementById("keyS").classList.remove("key-active");
  }
  if (event.key === "d" || event.key === "D") {
    document.getElementById("keyD").classList.remove("key-active");
  }
  if (event.key === "f" || event.key === "F") {
    document.getElementById("keyF").classList.remove("key-active");
  }
  if (event.key === "g" || event.key === "G") {
    document.getElementById("keyG").classList.remove("key-active");
  }

  // Space აშვება

  let spaceBtn = document.getElementById("spaceButton");
  if (event.code === "Space") {
    spaceBtn.textContent = "Release!";
  }

  // წრეების ჩაქრობა
  if (event.key === "r" || event.key === "R") {
    document.getElementById("redCircle").classList.remove("red-active");
  }
  if (event.key === "y" || event.key === "Y") {
    document.getElementById("yellowCircle").classList.remove("yellow-active");
  }
  if (event.key === "g" || event.key === "G") {
    document.getElementById("greenCircle").classList.remove("green-active");
  }
}
