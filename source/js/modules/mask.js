import IMask from 'imask';

const phoneInput = document.querySelector('[data-validate-phone]');

const initMask = new IMask(phoneInput, {
  mask: '+7(000)000-00-00',
});

export {initMask};
