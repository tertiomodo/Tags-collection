const b2__twoButton = document.querySelector('.b2__two-button');
const b2__twoBlock = document.querySelectorAll('.b2__two-block');

b2__twoButton.addEventListener('click', () => {
  b2__twoBlock.forEach(elements => {
    elements.classList.add('b2__two-block--visible');
    b2__twoButton.closest('.b2__two-button-wrapper').classList.add('b2__two-button-wrapper--hidden');
  });
});