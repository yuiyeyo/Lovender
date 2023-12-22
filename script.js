document.addEventListener('DOMContentLoaded', function () {
  const topImages = document.querySelectorAll('.topslideshow a');

  // Initialize FancyBox
  Fancybox.bind(topImages, {
    loop: true,
  });

  let currentIndex = 0;

  function changeSlide() {
    currentIndex = (currentIndex + 1) % topImages.length;
    Fancybox.open(topImages, currentIndex);
  }

  // Change slide every second
  setInterval(changeSlide, 2000); // Change image every 2 seconds
});
