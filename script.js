document.addEventListener('DOMContentLoaded', function () {
  const topImages = document.querySelectorAll('.topslideshow a');

  // Initialize FancyBox
  Fancybox.bind(topImages, {
    loop: true,
  });

  // Change slide every second
  setInterval(function () {
    Fancybox.next();
  }, 2000); // Change image every 2 seconds
});
