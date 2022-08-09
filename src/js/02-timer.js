import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('button[data-start]');
const dayCounter = document.querySelector('span[data-days]');
const hourCounter = document.querySelector('span[data-hours]');
const minuteCounter = document.querySelector('span[data-minutes]');
const secondsCounter = document.querySelector('span[data-seconds]');
startButton.disabled = true;
let selectedDate;
let currentDate;
let timer = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(date) {
    if (date[0] > new Date()) {
      selectedDate = date[0];
      startButton.disabled = false;
      startButton.addEventListener('click', startCounitng);
    } else {
      wrongDate();
    }
    console.log(date[0]);
  },
};

flatpickr('#datetime-picker', options);

function startCounitng() {
  timer = setInterval(() => {
    startButton.disabled = true;
    currentDate = new Date();
    if (selectedDate - currentDate < 1000) {
      clearInterval(timer);
      startButton.disabled = false;
      Notiflix.Notify.success('This is your date');
    }
    updateClock(convertMs(selectedDate - currentDate));
  }, 1000);
}

function wrongDate() {
  Notiflix.Notify.failure('Please choose a date in the future');
  startButton.disabled = true;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateClock({ days, hours, minutes, seconds }) {
  dayCounter.textContent = days < 10 ? addLeadingZero(days) : days;
  hourCounter.textContent = hours < 10 ? addLeadingZero(hours) : hours;
  minuteCounter.textContent = minutes < 10 ? addLeadingZero(minutes) : minutes;
  secondsCounter.textContent = seconds < 10 ? addLeadingZero(seconds) : seconds;
}

function addLeadingZero(value) {
  const stringValue = String(value);
  return stringValue.padStart(2, '0');
}
