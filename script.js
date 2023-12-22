document.addEventListener('DOMContentLoaded', function () {
  const topSlide = document.getElementById('topslide');
  const images = topSlide.querySelectorAll('img');
  let currentIndex = 0;

  function changeSlide() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  }

  // Change slide every second
  setInterval(changeSlide, 2000); // Change image every 2 seconds
});