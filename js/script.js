let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex) {
      slide.classList.add('active');
    }
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 3000); // Change every 3 seconds
showSlides();
