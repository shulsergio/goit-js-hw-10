// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const btnStart = document.querySelector('[data-start]');
const myInput = document.querySelector('#datetime-picker');
const timerHTML = document.querySelector('.timer');
let timerFromUser = 0;
let fp = '';
let setTimerId = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log('selectedDates[0]- ', selectedDates[0]);
    if (selectedDates[0] < options.defaultDate) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        color: '#ef4040',
        messageColor: '#fff',
        titleColor: '#fff',
        iconColor: '#fff',
        position: 'topRight',
      });
      btnStart.setAttribute('disabled', 'true');
    } else {
      timerFromUser = selectedDates[0];
      btnStart.removeAttribute('disabled');
    }
  },
};
fp = flatpickr(myInput, options);

btnStart.addEventListener('click', () => {
  myInput.disabled = true;
  btnStart.setAttribute('disabled', 'true');

  setTimerId = setInterval(() => {
    onTimer(timerFromUser);
  }, 1000);
});

function onTimer(futureDate) {
  const currentData = new Date();
  let xx = futureDate - currentData;
  if (xx < 1) {
    myInput.disabled = false;
    clearInterval(setTimerId);
    return;
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
