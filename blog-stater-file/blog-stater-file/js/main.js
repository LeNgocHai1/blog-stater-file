// JavaScript Code Start From Here
$(function() {
    $('.feature-post-slider').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1
            }
        }
    });
});