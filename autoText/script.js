const textEl = document.getElementById('text');
const speedText = document.getElementById('speedText');
const increaseSpeedBtn = document.getElementById('increaseSpeed');
const decreaseSpeedBtn = document.getElementById('decreaseSpeed');
const text = 'We Love Programming!';
let idx = 1;
let speed = 1;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, 300 / speed);
}

increaseSpeedBtn.addEventListener('click', increaseSpeed);
decreaseSpeedBtn.addEventListener('click', decreaseSpeed);

function updateSpeed() {
  speedText.innerText = speed;
}

function increaseSpeed() {
  if (speed < 10) {
    speed++;
    updateSpeed();
  }
}

function decreaseSpeed() {
  if (speed > 1) {
    speed--;
    updateSpeed();
  }
}

updateSpeed(); // Para asegurar que el valor inicial se refleje correctamente en el texto
