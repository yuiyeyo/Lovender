document.addEventListener('DOMContentLoaded', function () {
  const topimages = document.querySelectorAll('.topslides');
  let currentIndex = 0;

  function showImage(index) {
    Fancybox.open(topimages, index);
  }

  function changeSlide() {
    currentIndex = (currentIndex + 1) % topimages.length;
    showImage(currentIndex);
  }

  // Change slide every second
  setInterval(changeSlide, 2000); // Change image every 2 seconds

  // Initialize Fancybox
  /*Fancybox.bind(topimages, {
    loop: true,
  });

  // Show the first image immediately
  showImage(currentIndex);*/
});