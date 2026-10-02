// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = document.getElementById('fullscreenCarousel');

    // Initialize Bootstrap Carousel with pause: false so it never pauses on hover
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        ride: 'carousel',
        pause: false,
        touch: true
    });

    // Optional: Log slide change event for debugging
    myCarousel.addEventListener('slide.bs.carousel', function (event) {
        console.log('Transitioning to slide index: ' + event.to);
    });
});