document.addEventListener('DOMContentLoaded', function () {
  const topImages = document.querySelectorAll('[data-fancybox="topslides"]');
  let currentIndex = 0;

  function changeSlide() {
    currentIndex = (currentIndex + 1) % topImages.length;
    $.fancybox.open(topImages, { index: currentIndex });
  }

  // Initialize Fancybox
  $.fancybox.bind('[data-fancybox="topslides"]', {
    loop: true,
  });

  // Start slideshow: Change slide every 2 seconds
  setInterval(changeSlide, 2000);
});