function toggleAccordion() {

  const accordionNavigation = document.querySelector('[data-accordion="1"]');
  const accordionContacts = document.querySelector('[data-accordion="2"]');
  // const buttons = document.querySelectorAll('[data-accordion-button]');

  accordionNavigation.classList.add('footer-nav--closed');
  accordionContacts.classList.add('contacts--closed');
}

export {toggleAccordion};
