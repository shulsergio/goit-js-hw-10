// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
let fp = '';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timer(selectedDates[0]);
  },
};

const myInput = document.querySelector('#datetime-picker');
const timerHTML = document.querySelector('.timer');
flatpickr(myInput, options);
console.log(fp);
// timer(fp);

function timer(data) {
  const id = setInterval(() => {
    onTimer(data);
  }, 1000);
}
function onTimer(futureDate) {
  const currentData = new Date();
  let xx = futureDate - currentData;
  let day = 1000 * 60 * 60 * 24;
  let hour = 1000 * 60 * 60;
  let minutes = 1000 * 60;
  let diffDay = Math.floor(xx / day);
  let difHour = Math.floor((xx % day) / hour);
  let difMin = Math.floor(((xx % day) % hour) / minutes);
  let difSec = Math.floor((((xx % day) % hour) % minutes) / 1000);
  document.querySelector('[data-days]').textContent = diffDay;
  document.querySelector('[data-hours]').textContent = difHour;
  document.querySelector('[data-minutes]').textContent = difMin;
  document.querySelector('[data-seconds]').textContent = difSec;
}

// const finalData = new Date(2024, 6, 14, 22, 0, 0);
// function onTimer() {
//   const currentData = new Date();
//   let day = 1000 * 60 * 60 * 24;
//   let hour = 1000 * 60 * 60;
//   let minutes = 1000 * 60;
//   let xx = finalData - currentData;
//   let diffDay = Math.floor(xx / day);
//   let difHour = Math.floor((xx % day) / hour);
//   let difMin = Math.floor(((xx % day) % hour) / minutes);
//   let difSec = Math.floor((((xx % day) % hour) % minutes) / 1000);
//   return `days- ${diffDay}, hours- ${difHour}, min- ${difMin}, sec- ${difSec}`;
// }

// const id = setInterval(() => {
//     console.log(onTimer());
// }, 1000);
