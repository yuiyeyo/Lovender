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

var slideIndexLiving = 0;

function showSlidesLiving() {
    var slides = document.querySelectorAll('.living-room a');

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slideIndexLiving++;
    if (slideIndexLiving > slides.length) {
        slideIndexLiving = 1;
    }

    slides[slideIndexLiving - 1].style.opacity = 1;
    setTimeout(showSlidesLiving, 2000); // Change image every 2 seconds
}

// Initial call to start the living room slideshow
showSlidesLiving();

$(document).ready(function () {
    $(".living-room a").fancybox({
        loop: true,
        buttons: ["slideShow", "fullScreen", "thumbs", "close"]
    });
});

var slideIndexDining = 0;

function showSlidesDining() {
    var slides = document.querySelectorAll('.dining-room a');

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slideIndexDining++;
    if (slideIndexDining > slides.length) {
        slideIndexDining = 1;
    }

    slides[slideIndexDining - 1].style.opacity = 1;
    setTimeout(showSlidesDining, 2000); // Change image every 2 seconds
}

// Initial call to start the dining room slideshow
showSlidesDining();

$(document).ready(function () {
    $(".dining-room a").fancybox({
        loop: true,
        buttons: ["slideShow", "fullScreen", "thumbs", "close"]
    });
});

var slideIndexGazebo = 0;

function showSlidesGazebo() {
    var slides = document.querySelectorAll('.gazebo a');

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slideIndexGazebo++;
    if (slideIndexGazebo > slides.length) {
        slideIndexGazebo = 1;
    }

    slides[slideIndexGazebo - 1].style.opacity = 1;
    setTimeout(showSlidesGazebo, 2000); // Change image every 2 seconds
}

// Initial call to start the dining room slideshow
showSlidesGazebo();

$(document).ready(function () {
    $(".gazebo a").fancybox({
        loop: true,
        buttons: ["slideShow", "fullScreen", "thumbs", "close"]
    });
});

var slideIndexFamroom = 0;

function showSlidesFamroom() {
    var slides = document.querySelectorAll('.famroom a');

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slideIndexFamroom++;
    if (slideIndexFamroom > slides.length) {
        slideIndexFamroom = 1;
    }

    slides[slideIndexFamroom - 1].style.opacity = 1;
    setTimeout(showSlidesFamroom, 2000); // Change image every 2 seconds
}

// Initial call to start the dining room slideshow
showSlidesFamroom();

$(document).ready(function () {
    $(".famroom a").fancybox({
        loop: true,
        buttons: ["slideShow", "fullScreen", "thumbs", "close"]
    });
});