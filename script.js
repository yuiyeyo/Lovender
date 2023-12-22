document.addEventListener('DOMContentLoaded', function () {
  const topImages = document.querySelectorAll('.topslideshow a');
  let currentIndex = 0;

  function changeSlide() {
    currentIndex = (currentIndex + 1) % topImages.length;
    $.fancybox.open(topImages, {
      index: currentIndex,
      loop: true,
    });
  }

  // Change slide every second
  setInterval(changeSlide, 2000); // Change image every 2 seconds

  // Initialize Fancybox
  $.fancybox.defaults.animationEffect = "fade";
  $.fancybox.defaults.transitionEffect = "slide";
});