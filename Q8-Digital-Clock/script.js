let intervalId = null;
let isRunning  = true;

function pad(n) {
  return n < 10 ? "0" + n : "" + n;
}

function updateClock() {
  const now = new Date();

  const hours24 = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm   = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;

  const timeStr = `${pad(hours12)}:${pad(minutes)}:${pad(seconds)}`;

  document.getElementById("clockTime").textContent = timeStr;
  document.getElementById("clockAmpm").textContent = ampm;
  document.getElementById("segH").textContent       = pad(hours12);
  document.getElementById("segM").textContent       = pad(minutes);
  document.getElementById("segS").textContent       = pad(seconds);

  const days   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const dateStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  document.getElementById("clockDate").textContent = dateStr;

  const clockEl = document.getElementById("clockTime");
  clockEl.style.textShadow = seconds % 2 === 0
    ? "0 0 40px #00ff8855"
    : "0 0 20px #00ff8822";
}

function startClock() {
  updateClock();
  intervalId = setInterval(updateClock, 1000);
  isRunning  = true;
  document.getElementById("toggleLabel").textContent = "Stop";
}

function toggleClock() {
  if (isRunning) {
    clearInterval(intervalId);
    intervalId = null;
    isRunning  = false;
    document.getElementById("toggleLabel").textContent = "Start";
    document.getElementById("clockTime").style.opacity = "0.4";
  } else {
    document.getElementById("clockTime").style.opacity = "1";
    startClock();
  }
}

function resetClock() {
  if (!isRunning) {
    document.getElementById("clockTime").style.opacity = "1";
    startClock();
  }
  updateClock();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tzVal").textContent =
    Intl.DateTimeFormat().resolvedOptions().timeZone +
    ` (UTC${new Date().getTimezoneOffset() > 0 ? "-" : "+"}${
      Math.abs(new Date().getTimezoneOffset() / 60)
    })`;

  startClock();
});