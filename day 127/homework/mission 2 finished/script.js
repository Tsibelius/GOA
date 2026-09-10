

  let timeDisplay = document.getElementById("timeDisplay");

  function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }

    timeDisplay.textContent = hours + ":" + minutes + ":" + seconds;
  }

  updateClock();
  setInterval(updateClock, 1000);

