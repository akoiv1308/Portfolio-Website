const texts = ["Student", "Developer", "Video Technician"];
let count = 0;
const changingText = document.getElementById('changing-text');

setInterval(() => {
  changingText.textContent = texts[count];
  changingText.style.animation = 'none';
  changingText.offsetHeight;
  changingText.style.animation = null;
  count = (count + 1) % texts.length;
}, 2000);

const sections = document.querySelectorAll('.section');

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

document.querySelectorAll('.circle').forEach(circle => {
  let percentage = circle.getAttribute('data-percentage');
  let canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  circle.appendChild(canvas);
  let context = canvas.getContext('2d');
  let start = -0.5 * Math.PI;
  let end = start + (percentage / 100) * 2 * Math.PI;

  let color;
  if (percentage >= 70) {
    color = '#00CA4E';
  }

  // Background circle
  context.beginPath();
  context.arc(50, 50, 45, 0, 2 * Math.PI);
  context.strokeStyle = '#ccc';
  context.lineWidth = 10;
  context.stroke();

  // Foreground circle
  context.beginPath();
  context.arc(50, 50, 45, start, end);
  context.strokeStyle = color;
  context.lineWidth = 10;
  context.stroke();
});

// Back to Top Button Functionality
const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
