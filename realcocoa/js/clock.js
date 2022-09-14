const clock = document.querySelector(".status-bar__time span");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${Minutes}`;
}

getClock();
setInterval(getClock, 1000);
