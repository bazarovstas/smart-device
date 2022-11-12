function showSpoiler() {
  const spoilerText1 = document.querySelector('[data-spoiler-1]');
  const spoilerText2 = document.querySelector('[data-spoiler-2]');
  const spoilerText3 = document.querySelector('[data-spoiler-3]');
  const spoilerButton = document.querySelector('[data-spoiler-button]');

  function showSpoilerText() {
    const check = spoilerText1.classList.contains('spoiler-is-active');

    if (document.documentElement.clientWidth < 767) {
      if (check) {
        spoilerText1.classList.toggle('spoiler-is-active');
        spoilerText1.style.display = 'none';
      }
      if (!check) {
        spoilerText1.classList.toggle('spoiler-is-active');
        spoilerText1.style.display = 'block';
      }
    }

    if (spoilerText2.classList.contains('spoiler-is-active')) {
      spoilerButton.textContent = 'Подробнее';
    } else {
      spoilerButton.textContent = 'Свернуть';
    }
    spoilerText2.classList.toggle('spoiler-is-active');
    spoilerText3.classList.toggle('spoiler-is-active');
  }

  spoilerButton.addEventListener('click', showSpoilerText);
}

export {showSpoiler};
