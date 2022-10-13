let b3__tabsBtn = document.querySelectorAll('.b3__tabs-nav-btn');
let b3__tabsItem = document.querySelectorAll('.b3__tabs-item');

b3__tabsBtn.forEach(element => {
  element.addEventListener('click', e => {
    const path = e.currentTarget.dataset.path;

    b3__tabsBtn.forEach(btn => {
      btn.classList.remove('b3__tabs-nav-btn--active');
    });
    
    e.currentTarget.classList.add('b3__tabs-nav-btn--active');

    b3__tabsItem.forEach(element => {
      element.classList.remove('b3__tabs-item--active');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('b3__tabs-item--active');
  });
});