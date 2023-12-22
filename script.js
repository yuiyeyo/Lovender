document.addEventListener('DOMContentLoaded', function () {
  const slideshow = document.querySelector('.topslideshow');
  const images = slideshow.querySelectorAll('img');
  let currentIndex = 0;

  function changeSlide() {
    images.forEach((image, index) => {
      if (index === currentIndex) {
        image.style.opacity = 1;
      } else {
        image.style.opacity = 0;
      }
    });
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Change slide every second
  setInterval(changeSlide, 2000); // Change image every 2 seconds
});
