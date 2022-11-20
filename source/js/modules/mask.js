import IMask from 'imask';

const phoneInputs = document.querySelectorAll('input[type="tel"]');

function initMask() {
  phoneInputs.forEach(
      (inputField) => new IMask(inputField, {
        mask: '+7 (000) 000 00 00',
      })
  );
}

export {initMask};
