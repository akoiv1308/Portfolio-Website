const texts = ["Student", "Developer"];
let count = 0;
const changingText = document.getElementById('changing-text');

if (changingText) {
  setInterval(() => {
    changingText.textContent = texts[count];
    changingText.style.animation = 'none';
    changingText.offsetHeight;
    changingText.style.animation = null;
    count = (count + 1) % texts.length;
  }, 2000);
}

// Scroll-up button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });
}

// Carousel arrows 
const imageCarousel = document.querySelector('.image-carousel');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

if (imageCarousel && leftArrow && rightArrow) {
  leftArrow.addEventListener('click', () => {
    imageCarousel.scrollBy({ left: -200, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    imageCarousel.scrollBy({ left: 200, behavior: 'smooth' });
  });
}

// Experience carousel
const carousels = document.querySelectorAll('.opposite-carousel');
carousels.forEach(carousel => {
  const imagesWrapper = carousel.querySelector('.carousel-images');

  const images = imagesWrapper.querySelectorAll('img');
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    imagesWrapper.style.transform = `translateX(${offset}%)`;
  }, 3000);
});

// Project carousel
const project_carousels = document.querySelectorAll('.project-carousel');
project_carousels.forEach(carousel => {
  const imagesWrapper = carousel.querySelector('.project-carousel-images');
  const images = imagesWrapper.querySelectorAll('img');
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 50;
    imagesWrapper.style.transform = `translateX(${offset}%)`;
  }, 4500);
});


