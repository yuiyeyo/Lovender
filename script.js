document.addEventListener('DOMContentLoaded', function () {
  const topSlide = document.getElementById('topslide');
  const images = topSlide.querySelectorAll('a[data-fancybox="topslides"]');
  let currentIndex = 0;

  function changeSlide() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  }

  // Initialize FancyBox
  $(document).ready(function () {
    $('[data-fancybox="topslides"]').fancybox({
      loop: true,
    });
  });

  // Change slide every 5 seconds (adjust the interval as needed)
  setInterval(changeSlide, 5000); // Change image every 5 seconds
});