document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const nav = document.querySelector('.nav');
  const counter = document.querySelector('.counter');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const titleSlide = document.querySelector('.title-slide');

  let current = 0;
  const total = slides.length;

  function updateUI() {
    counter.textContent = `${current + 1} / ${total}`;
    // Скрываем панель навигации на титульном слайде
    nav.classList.toggle('hidden', current === 0);
    // Скрываем прокрутку для ресурсного слайда, если понадобится
    document.body.style.overflow = 'hidden';
  }

  function show(index) {
    slides[current].classList.remove('active');
    current = (index + total) % total;
    slides[current].classList.add('active');
    updateUI();
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // Клик по титульному листу — переход на первый слайд со словом
  titleSlide.addEventListener('click', () => show(1));

  // Управление с клавиатуры
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        next();
        break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        prev();
        break;
      case 'Home':
        e.preventDefault();
        show(0);
        break;
      case 'End':
        e.preventDefault();
        show(total - 1);
        break;
    }
  });

  updateUI();
});
