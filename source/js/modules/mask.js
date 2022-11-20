import IMask, { Masked } from 'imask';

const phoneInputs = document.querySelectorAll('input[type="tel"]');

function initMask() {
  let phoneField = null;

  phoneInputs.forEach(
      (inputField) => {

        phoneField = new IMask(inputField, {
          mask: '+7(000)000-00-00',

        });

        console.log(phoneField.masked.isComplete);

      }

  );

  // if (phoneField.masked.isComplete) {
  //   console.log('full number');
  // }

}



export {initMask};
