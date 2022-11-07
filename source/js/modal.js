function toggleModal() {
  const openButton = document.querySelector('[data-open-modal-button]');
  const closeButton = document.querySelector('[data-close-modal-button]');
  let modal = document.querySelector('[data-modal="success"]');

  openButton.addEventListener('click', function () {
    if (!modal.classList.contains('is-active')) {
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  });

  closeButton.addEventListener('click', function () {
    if (modal.classList.contains('is-active')) {
      modal.classList.remove('is-active');
      document.body.style.overflow = 'visible';
    }
  });
}

export {toggleModal};
