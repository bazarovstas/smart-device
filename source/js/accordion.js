function toggleAccordion() {

  const accordionNavigation = document.querySelector('[data-accordion="1"]');
  const accordionContacts = document.querySelector('[data-accordion="2"]');
  const buttons = document.querySelectorAll('[data-accordion-button]');

  accordionNavigation.classList.add('footer-nav--closed');
  accordionContacts.classList.add('contacts--closed');

  function hideAccordions() {
    accordionNavigation.classList.toggle('footer-nav--closed');
    accordionContacts.classList.toggle('contacts--closed');
  }

  function showNavigationAccordion() {
    accordionNavigation.classList.toggle('footer-nav--closed');
  }




  // function hideAccordions() {
  //   const accordions = document.querySelectorAll('[data-accordion]');
  //   accordions.forEach((item) => {
  //     item.classList.toggle('')
  //   })
  // }
}

export {toggleAccordion};
