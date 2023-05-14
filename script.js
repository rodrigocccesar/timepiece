const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
let interval;

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  const valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

document.getElementById("start").addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(setTime, 1000);
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  totalSeconds = 0;
  minutesLabel.innerHTML = "00";
  secondsLabel.innerHTML = "00";
});
