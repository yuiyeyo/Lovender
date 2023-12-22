document.addEventListener('DOMContentLoaded', function () {
  const slideshowImages = document.querySelectorAll('.topslideshow a');

  // Initialize FancyBox
  Fancybox.bind(slideshowImages, {
    loop: true,
  });

  let currentIndex = 0;

  function changeSlide() {
    slideshowImages[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slideshowImages.length;
    slideshowImages[currentIndex].style.opacity = 1;
  }

  // Change slide every second
  setInterval(changeSlide, 2000); // Change image every 2 seconds
});