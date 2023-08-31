const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');
const slides = document.querySelector('.slides');

let currentIndex = 0;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
  goToSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % indicators.length;
  goToSlide(currentIndex);
});

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentIndex = i;
    goToSlide(currentIndex);
  });
});

goToSlide(currentIndex);
