document.addEventListener('DOMContentLoaded', function () {
  const topSlide = document.getElementById('topslide');
  const images = topSlide.querySelectorAll('a[data-fancybox="topslides"]');
  let currentIndex = 0;

  function changeSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].click(); // Trigger FancyBox
  }

  // Change slide every second
  setInterval(changeSlide, 2000); // Change image every 2 seconds

  // Initialize FancyBox
  $(document).ready(function () {
    $('[data-fancybox="topslides"]').fancybox({
      loop: true,
    });
  });
});
