// Инициализация Inputmask
// Скрипт находит на странице все атрибуты с type="tel"
var selector = document.querySelector('input[type="tel"]');
// Создаем пример того как должна выглядеть маска и номер в ней (9 можно заменить на любую цифру)
var im = new Inputmask('+7 (999)-999-99-99');

im.mask(selector);
// Инициализация JustValidate
new JustValidate('.b10__form', {
  rules: {
    // Проверки для имени
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    // Проверки для телефона
    tel: {
      required: true,
      // Собственная функция валидации которая проверяет только цифры, без учета скорок и тире
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    // Проверки для email
    mail: {
      required: true,
      email: true
    },
  },
});