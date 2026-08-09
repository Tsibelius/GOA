// ==========================================
    // 1) დავალება
    // ==========================================
    var div1 = document.createElement("div");
    div1.className = "box1";

    div1.onmouseover = function() {
        div1.style.backgroundColor = "green";
    };
    div1.onmouseout = function() {
        div1.style.backgroundColor = "gray";
    };
    div1.onmousedown = function() {
        div1.style.transform = "scale(0.8)";
    };
    div1.onmouseup = function() {
        div1.style.transform = "scale(1)";
    };
    document.body.appendChild(div1);


    // ==========================================
    // 2) დავალება
    // ==========================================
    var emoji = document.createElement("div");
    emoji.className = "emoji-box";
    emoji.textContent = "😊";

    emoji.onmouseover = function() {
        emoji.textContent = "😄";
    };
    emoji.onmouseout = function() {
        emoji.textContent = "😊";
    };
    emoji.onmousedown = function() {
        emoji.textContent = "😠";
    };
    emoji.onmouseup = function() {
        emoji.textContent = "😎";
    };
    document.body.appendChild(emoji);


    // ==========================================
    // 3) დავალება
    // ==========================================
    var square3 = document.createElement("div");
    square3.className = "square3";

    var colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    var colorIndex = 0;

    square3.onwheel = function() {
        colorIndex = (colorIndex + 1) % colors.length;
        square3.style.backgroundColor = colors[colorIndex];
    };
    square3.onmouseover = function() {
        square3.classList.add("square3-shadow");
    };
    square3.onmouseout = function() {
        square3.classList.remove("square3-shadow");
    };
    document.body.appendChild(square3);


    // ==========================================
    // 4) დავალება
    // ==========================================
    var ball4 = document.createElement("div");
    ball4.className = "ball4";
    var ballSize = 60;

    ball4.onmouseover = function() {
        ball4.style.transform = "scale(1.2)";
    };
    ball4.onmouseout = function() {
        ball4.style.transform = "scale(1)";
    };
    ball4.onwheel = function() {
        ballSize += 10;
        ball4.style.width = ballSize + "px";
        ball4.style.height = ballSize + "px";
    };
    document.body.appendChild(ball4);


    // ==========================================
    // 5) დავალება
    // ==========================================
    var text5 = document.createElement("div");
    text5.className = "text-box5";
    text5.textContent = "Move your mouse here";

    text5.onmouseover = function() {
        text5.textContent = "Welcome!";
    };
    text5.onmousedown = function() {
        text5.textContent = "Don't hold me 😅";
    };
    text5.onmouseup = function() {
        text5.textContent = "Thanks!";
    };
    text5.onmouseout = function() {
        text5.textContent = "Move your mouse here";
    };
    document.body.appendChild(text5);


    // ==========================================
    // 6) Energy Bar
    // ==========================================
    var bar6 = document.createElement("div");
    bar6.className = "energy-bar6";
    var barWidth = 100;

    bar6.onwheel = function() {
        barWidth += 10;
        bar6.style.width = barWidth + "px";
    };
    bar6.onmouseover = function() {
        bar6.style.backgroundColor = "blue";
    };
    bar6.onmouseout = function() {
        bar6.style.backgroundColor = "gray";
    };
    document.body.appendChild(bar6);


    // ==========================================
    // 7) დავალება
    // ==========================================
    var div7 = document.createElement("div");
    div7.className = "all-events7";
    div7.textContent = "Event Text";

    div7.onmouseover = function() {
        div7.textContent = "Mouse Over";
    };
    div7.onmouseout = function() {
        div7.textContent = "Mouse Out";
    };
    div7.onmousedown = function() {
        div7.textContent = "Mouse Down";
    };
    div7.onmouseup = function() {
        div7.textContent = "Mouse Up";
    };
    div7.onwheel = function() {
        div7.textContent = "Wheel Turned";
    };
    document.body.appendChild(div7);


    // ==========================================
    // დიდი div 8
    // ==========================================
    var div8 = document.createElement("div");
    div8.className = "big-div8";

    div8.onmousedown = function() {
        div8.style.backgroundColor = "yellow";
    };
    div8.onmouseup = function() {
        div8.style.backgroundColor = "white";
    };
    div8.onmouseover = function() {
        div8.classList.add("big-div8-hover");
    };
    div8.onmouseout = function() {
        div8.classList.remove("big-div8-hover");
    };
    document.body.appendChild(div8);

