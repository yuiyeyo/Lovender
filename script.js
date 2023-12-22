document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const topimages = document.querySelectorAll('.topslides');

  // Function to change slide
  function changeSlide() {
    currentIndex = (currentIndex + 1) % topimages.length;
    updateSlideshow();
  }

  // Function to update the slideshow
  function updateSlideshow() {
    // Hide all images
    topimages.forEach((image) => {
      image.style.display = 'none';
    });

    // Display the current image
    topimages[currentIndex].style.display = 'block';
  }

  // Change slide every second
  setInterval(changeSlide, 2000);

  // Initialize Fancybox
  Fancybox.bind('.topslides', {
    loop: true,
  });

  // Open Fancybox when an image is clicked
  topimages.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentIndex = index;
      Fancybox.open(topimages, currentIndex);
    });
  });
});