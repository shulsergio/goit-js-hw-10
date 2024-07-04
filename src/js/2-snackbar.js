// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

iziToast.info({
  backgroundColor: '#09f',
  title: 'Hello',
  titleColor: '#fff',
  titleSize: '16px',
  message: 'Welcome!',
  messageColor: '#fff',
  messageSize: '16px',
  theme: 'light',
  position: 'topRight',
  iconColor: '#fff',
});
const dataInput = document.querySelector('input[type="number"]');
const btnSubmit = document.querySelector('.btn-sbm');
btnSubmit.addEventListener('click', onClickBtn);

function onClickBtn(evt) {
  evt.preventDefault();
  let radio = document.querySelector('input[name="state"]:checked').value;
  let delay = parseInt(dataInput.value);

  const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      radio === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
  mypromise
    .then(delay => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        messageSize: '16px',
        color: '#59a10d',
        messageColor: '#fff',
        titleColor: '#fff',
        iconColor: '#fff',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${delay}ms`,
        messageSize: '16px',
        color: '#ef4040',
        messageColor: '#fff',
        titleColor: '#fff',
        iconColor: '#fff',
        position: 'topRight',
      });
    });
}
