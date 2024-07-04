// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const dataLoadIzi = [
  {
    title: 'Hello',
    icon: '',
    iconColor: '#fff',
    message: 'Welcome!',
    backgroundColor: '#09f',
  },
  {
    title: '',
    icon: '❌',
    message: 'Rejected promise in ',
    backgroundColor: '#ef4040',
  },
  {
    title: '',
    icon: '✅',
    message: 'Fulfilled promise in ',
    backgroundColor: '#59a10d',
  },
  {
    title: 'Caution',
    icon: '',
    message: 'You forgot important data',
    backgroundColor: '#ffa000',
  },
];
onLoadIzi(dataLoadIzi[0]);
const dataInput = document.querySelector('input[type="number"]');
const btnSubmit = document.querySelector('.btn-sbm');
btnSubmit.addEventListener('click', onClickBtn);

function onClickBtn(evt) {
  evt.preventDefault();
  let radio = document.querySelector('input[name="state"]:checked').value;
  let delay = parseInt(dataInput.value);
  if (isNaN(delay) || delay < 0) {
    onLoadIzi(dataLoadIzi[3]);
    return;
  }

  const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      radio === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
  mypromise
    .then(delay => {
      onLoadIzi(dataLoadIzi[2], delay);
    })
    .catch(delay => {
      onLoadIzi(dataLoadIzi[1], delay);
    });
}

function onLoadIzi(data, delay = -1) {
  let newMessage =
    delay >= 0 ? data.icon + ' ' + data.message + delay + 'ms' : data.message;
  iziToast.show({
    backgroundColor: data.backgroundColor,
    title: data.title,
    titleColor: '#fff',
    titleSize: '16px',
    message: newMessage,
    messageColor: '#fff',
    messageSize: '16px',
    position: 'topRight',
  });
}
