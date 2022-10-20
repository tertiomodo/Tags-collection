let b6__burger = document.querySelector('.b6__burger');
let b6__menu = document.querySelector('.b6__nav-list');
let b6__menuLinks = b6__menu.querySelectorAll('.b6__nav-item');

b6__burger.addEventListener('click', () => {
  b6__burger.classList.toggle('b6__burger--active');
  b6__menu.classList.toggle('b6__nav--active');
  document.body.classList.toggle('stop-scroll');
});

b6__menuLinks.forEach(element => {
  element.addEventListener('click', () => {
    b6__burger.classList.remove('b6__burger--active');
    b6__menu.classList.remove('b6__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});