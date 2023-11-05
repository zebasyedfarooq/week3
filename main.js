(function ($) {
    "use strict"

    // testimonial-carousel

    $(".testimonial-carousel").owlcarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        Responsive: {
            0:{
                items: 1
            },
            768:{
                items:2
            }
        }
    });
})(jQuery);