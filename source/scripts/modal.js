// console.log('hi! hi! hi!');

const modal = document.querySelector('.modal')
const btnsMenu = document.querySelectorAll('.price__button');
const body = document.body;
const modalBtn = document.querySelector('.modal__btn')

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
};

const onDocumentClick = (evt) => {
  if (evt.target === body) {
    closeModal();
  }
};

const openMenu = () => {
  modal.classList.add('modal--open');
};

function closeModal() {
  modal.classList.remove('modal--open');

  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', onDocumentClick);
  body.classList.remove('overlay');
}

modalBtn.addEventListener('click', () => {
closeModal();
});

btnsMenu.forEach((elem) => {
  elem.addEventListener('click', () => {
    modal.classList.add('modal--open');
    body.classList.add('overlay');
    document.addEventListener('keydown', onDocumentKeydown);
    body.addEventListener('click', onDocumentClick);

  });
});
