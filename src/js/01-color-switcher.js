const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let timerId;
// document.body.style.backgroundColor = 'yellow';
startButton.addEventListener('click', () => {
  if (!startButton.disabled)
    timerId = setInterval(() => {
      startButton.disabled = true;
      stopButton.disabled = false;
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
