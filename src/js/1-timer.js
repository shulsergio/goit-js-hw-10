// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const btnStart = document.querySelector('[data-start]');
let fp = '';
let setTimerId = 0;
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

function timer(dateFromTimer) {
  const currentData = new Date();
  if (currentData > dateFromTimer) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
      color: '#ef4040',
      messageColor: '#fff',
      titleColor: '#fff',
      iconColor: '#fff',
      position: 'topRight',
    });
    return;
  } else {
    btnStart.removeAttribute('disabled');
    btnStart.addEventListener('click', () => {
      btnStart.setAttribute('disabled', 'true');
      clearInterval(setTimerId);

      setTimerId = setInterval(() => {
        onTimer(dateFromTimer);
      }, 1000);
    });
  }
}
function onTimer(futureDate) {
  const currentData = new Date();
  let xx = futureDate - currentData;
  if (xx <= 0) {
    clearInterval(setTimerId);
  }
  let day = 1000 * 60 * 60 * 24;
  let hour = 1000 * 60 * 60;
  let minutes = 1000 * 60;
  let diffDay = String(Math.floor(xx / day));
  let difHour = String(Math.floor((xx % day) / hour));
  let difMin = String(Math.floor(((xx % day) % hour) / minutes));
  let difSec = String(Math.floor((((xx % day) % hour) % minutes) / 1000));
  document.querySelector('[data-days]').textContent = diffDay.padStart(2, '0');
  document.querySelector('[data-hours]').textContent = difHour.padStart(2, '0');
  document.querySelector('[data-minutes]').textContent = difMin.padStart(
    2,
    '0'
  );
  document.querySelector('[data-seconds]').textContent = difSec.padStart(
    2,
    '0'
  );
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
