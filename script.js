document.addEventListener('DOMContentLoaded', function () {
  const topImages = document.querySelectorAll('.topslideshow a');
  let currentIndex = 0;

  function changeSlide() {
    currentIndex = (currentIndex + 1) % topImages.length;
    const currentImage = topImages[currentIndex];
    currentImage.click();
  }

  // Change slide every second
  setInterval(changeSlide, 2000); // Change image every 2 seconds

  // Initialize Fancybox
  Fancybox.bind(topImages, {
    loop: true,
  });
});