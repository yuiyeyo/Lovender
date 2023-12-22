document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.topslides');
  let currentIndex = 0;

  function changeSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    Fancybox.open(images, currentIndex);
  }

  // Change slide every second
  setInterval(changeSlide, 2000); // Change image every 2 seconds

  // Initialize Fancybox
  Fancybox.bind(images, {
    loop: true,
  });
});