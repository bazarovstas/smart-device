function toggleAccordion() {

  const accordions = document.querySelectorAll('[data-accordion]');
  const buttons = document.querySelectorAll('[data-accordion-button]');

  accordions.forEach((item) => item.classList.add('accordion--closed'));

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const accordion = button.parentNode.parentNode;

      if (!accordion.classList.contains('accordion--closed')) {
        accordion.classList.add('accordion--closed');
      } else {
        accordions.forEach((item) => item.classList.add('accordion--closed'));
        accordion.classList.remove('accordion--closed');
      }
    });
  });
}

export {toggleAccordion};
