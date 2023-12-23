document.addEventListener('DOMContentLoaded', function () {
  const topSlide = document.getElementById('topslide');
  const images = topSlide.querySelectorAll('.topslideshow a[data-fancybox="topslides"]');
  let currentIndex = 0;

  function changeSlide() {
    $(images[currentIndex]).fadeOut(500); // Fade out current image
    currentIndex = (currentIndex + 1) % images.length;
    $(images[currentIndex]).fadeIn(500); // Fade in next image
  }

  // Change slide every second
  setInterval(changeSlide, 1000); // Change image every 1 second

  // Initialize FancyBox when an image is clicked
  $(document).on('click', '[data-fancybox="topslides"]', function () {
    $.fancybox.open(images, {
      loop: true,
      index: currentIndex,
    });
  });
});