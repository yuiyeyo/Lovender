document.addEventListener("DOMContentLoaded", function() {
    const topGalleryContainer = document.querySelector(".topgallery-container");
    const topGallery = document.querySelector(".topgallery");
    const images = document.querySelectorAll(".topgallery img");
    let scrollAmount = 0;
    const scrollSpeed = 1.5; // Adjust the scroll speed as needed

    // Clone the images to ensure continuous scrolling
    topGallery.innerHTML += topGallery.innerHTML;

    function autoScroll() {
        scrollAmount += scrollSpeed;
        topGallery.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= topGallery.scrollWidth / 2) {
            scrollAmount = 0;
        }
    }

    setInterval(autoScroll, 30); 
});