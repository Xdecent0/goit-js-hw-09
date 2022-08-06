const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let isPressed = false;
let timerId;
// document.body.style.backgroundColor = 'yellow';
startButton.addEventListener('click', () => {
  if (!isPressed)
    timerId = setInterval(() => {
      isPressed = true;
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  isPressed = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
