function scrollToForm() {
  const button = document.querySelector('[data-scroll-button]');
  const form = document.querySelector('[data-scroll-to-form]');

  function handleButtonClick() {
    form.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }

  button.addEventListener('click', handleButtonClick);
}

export {scrollToForm};
